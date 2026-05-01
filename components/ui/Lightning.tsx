"use client";

import { useEffect, useRef } from "react";

interface LightningProps {
  color1?: [number, number, number];
  color2?: [number, number, number];
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

export function Lightning({
  color1 = [0.831, 0.365, 0.075],
  color2 = [0.953, 0.737, 0.278],
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}: LightningProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Hold latest props in a ref so the WebGL context is set up exactly once,
  // and the render loop reads fresh values without ever needing to be torn
  // down. Listing arrays in useEffect deps would re-init on every parent
  // render — which leaks WebGL contexts and crashes the GPU.
  const paramsRef = useRef({ color1, color2, xOffset, speed, intensity, size });
  paramsRef.current = { color1, color2, xOffset, speed, intensity, size };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Render at half resolution; CSS stretches the canvas back up. The shader
    // is diffuse noise covered by the reading scrim, so the upscale is invisible
    // but cuts per-frame pixel work by 4x.
    const RENDER_SCALE = 0.5;
    const resizeCanvas = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * RENDER_SCALE));
      const h = Math.max(1, Math.floor(canvas.clientHeight * RENDER_SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }
    // If we got back a lost context (can happen on rapid remount in dev StrictMode
    // when a previous cleanup called loseContext on this canvas), bail out — the
    // browser will fire webglcontextrestored and we'll re-init from the listener.
    if (gl.isContextLost()) return;

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;

      #define OCTAVE_COUNT 6

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));

          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;

          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;

          float dist = abs(uv.x);
          float falloff = smoothstep(0.0, 0.6, dist);
          vec3 baseColor = mix(uColor1, uColor2, falloff);
          vec3 col = baseColor * (mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist) * uIntensity;
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const uColor1Location = gl.getUniformLocation(program, "uColor1");
    const uColor2Location = gl.getUniformLocation(program, "uColor2");
    const uXOffsetLocation = gl.getUniformLocation(program, "uXOffset");
    const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
    const uIntensityLocation = gl.getUniformLocation(program, "uIntensity");
    const uSizeLocation = gl.getUniformLocation(program, "uSize");

    const startTime = performance.now();
    let rafId = 0;
    let stopped = false;
    let inView = true;

    const render = () => {
      if (stopped) return;
      if (!inView) {
        // Fully stop the RAF loop while offscreen; observer will restart it.
        rafId = 0;
        return;
      }
      if (document.hidden) {
        rafId = requestAnimationFrame(render);
        return;
      }
      resizeCanvas();
      const p = paramsRef.current;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(iTimeLocation, (performance.now() - startTime) / 1000.0);
      gl.uniform3fv(uColor1Location, p.color1);
      gl.uniform3fv(uColor2Location, p.color2);
      gl.uniform1f(uXOffsetLocation, p.xOffset);
      gl.uniform1f(uSpeedLocation, p.speed);
      gl.uniform1f(uIntensityLocation, p.intensity);
      gl.uniform1f(uSizeLocation, p.size);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !stopped && rafId === 0) {
          rafId = requestAnimationFrame(render);
        }
      },
      { threshold: 0, rootMargin: "100px" },
    );
    observer.observe(canvas);

    rafId = requestAnimationFrame(render);

    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      // Free GL resources but DO NOT call loseContext(). React reuses the same
      // canvas DOM node on immediate remount (e.g. StrictMode dev double-invoke,
      // or client-side nav back to this page), and a deliberately-lost context
      // gets returned by getContext() on the next mount, breaking shader
      // compilation. The context is collected naturally when the canvas leaves
      // the DOM.
      gl.deleteBuffer(vertexBuffer);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
