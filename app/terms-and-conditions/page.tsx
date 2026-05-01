import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions — CloudsForge",
  description:
    "Terms and conditions governing use of CloudsForge software, website, and services.",
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      lastUpdated="May 1, 2026"
      eyebrow="Legal"
    >
      <p>
        These Terms and Conditions (the &ldquo;Terms&rdquo;) govern your access
        to and use of the CloudsForge website, desktop application, and related
        services (collectively, the &ldquo;Services&rdquo;) operated by
        CloudsForge (&ldquo;CloudsForge,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading, installing,
        accessing, or using the Services, you agree to be bound by these Terms.
        If you do not agree, do not use the Services.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of legal majority in your
        jurisdiction, to use the Services. By using the Services you represent
        that you meet this requirement and that you have the legal capacity to
        enter into these Terms.
      </p>

      <h2>2. Accounts and License Keys</h2>
      <p>
        Some features of the Services require you to register for an account or
        receive a license key after purchase. You are responsible for keeping
        your account credentials and license keys confidential and for all
        activity that occurs under them. Notify us immediately at{" "}
        <a href="mailto:darren@cloudsforge.com">darren@cloudsforge.com</a> if
        you suspect unauthorized use.
      </p>

      <h2>3. License Grant</h2>
      <p>
        Subject to your compliance with these Terms and payment of any
        applicable fees, CloudsForge grants you a limited, non-exclusive,
        non-transferable, revocable license to install and use the CloudsForge
        desktop application for your personal or internal business use, in
        accordance with the tier you have purchased.
      </p>
      <p>You agree that you will not:</p>
      <ul>
        <li>
          Reverse engineer, decompile, or disassemble the Services, except to
          the extent expressly permitted by applicable law;
        </li>
        <li>
          Resell, sublicense, rent, lease, or otherwise commercially exploit
          the Services beyond the rights granted under your purchased tier;
        </li>
        <li>
          Remove or alter any proprietary notices, branding, or labels;
        </li>
        <li>
          Use the Services to violate applicable law, infringe third-party
          rights, or distribute malware or harmful code;
        </li>
        <li>
          Share or transfer your license key to other individuals beyond what
          your tier permits.
        </li>
      </ul>

      <h2>4. Open-Source Models and Third-Party Services</h2>
      <p>
        CloudsForge enables you to run open-source AI models on third-party
        cloud GPU providers (such as RunPod and Vast.ai). The open-source
        models are licensed by their respective authors under their own terms,
        and CloudsForge is not affiliated with the upstream authors of those
        models. You are solely responsible for complying with the licenses of
        any models you choose to download and use.
      </p>
      <p>
        Cloud GPU usage is billed directly by the provider you connect to. We
        do not mark up, intermediate, or take a share of those charges. Your
        relationship with each provider is governed by that provider&rsquo;s
        own terms of service.
      </p>

      <h2>5. Purchases and Payments</h2>
      <p>
        Purchases of CloudsForge licenses or add-ons are processed by our
        third-party payment processor. By making a purchase, you authorize us
        and our processor to charge the applicable fees and taxes to your
        chosen payment method. Prices are listed in the local currency
        displayed at checkout and may change from time to time; changes do not
        affect orders that have already been placed.
      </p>

      <h2>6. Refunds</h2>
      <p>
        Refund eligibility is described in our{" "}
        <a href="/refund">Refund Policy</a>, which forms part of these Terms.
      </p>

      <h2>7. User Content</h2>
      <p>
        The Services run locally on your machine and on cloud GPU instances
        that you control. CloudsForge does not collect or store the prompts,
        input data, or generated outputs (collectively, &ldquo;User
        Content&rdquo;) that you process through the desktop application. You
        retain all rights to your User Content and are solely responsible for
        it, including ensuring that you have the necessary rights to use any
        inputs and that your use complies with applicable law.
      </p>

      <h2>8. Acceptable Use</h2>
      <p>You agree not to use the Services to:</p>
      <ul>
        <li>
          Generate or distribute content that is unlawful, defamatory,
          harassing, sexually explicit involving minors, or that infringes the
          rights of others;
        </li>
        <li>
          Generate content intended to deceive, defraud, or impersonate any
          person or organization in a way that could cause harm;
        </li>
        <li>
          Interfere with the operation of the Services, attempt to gain
          unauthorized access to our systems, or circumvent our license
          enforcement.
        </li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        The Services, including all software, design, branding, and
        documentation (excluding open-source components and your User Content)
        are owned by CloudsForge or its licensors and are protected by
        intellectual property laws. Nothing in these Terms transfers ownership
        to you.
      </p>

      <h2>10. Updates and Major Versions</h2>
      <p>
        We may release updates, patches, and new features for the Services.
        Updates within your purchased major version are included for the
        lifetime of that major version. Future major versions may be offered
        as an optional paid upgrade; you are never required to upgrade, and
        your existing version remains usable.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the Services at any time. We may suspend or
        terminate your access to the Services or invalidate your license if
        you materially breach these Terms, including by violating the
        Acceptable Use section or by attempting to defraud our payment
        processor. On termination for breach, you must stop using the Services
        and uninstall the application; refunds, if any, are governed by our{" "}
        <a href="/refund">Refund Policy</a>.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
        UNINTERRUPTED, ERROR-FREE, OR THAT OUTPUTS GENERATED BY OPEN-SOURCE
        MODELS WILL MEET YOUR EXPECTATIONS. AI-GENERATED OUTPUTS MAY BE
        INACCURATE, BIASED, OR OTHERWISE UNSUITABLE; YOU ARE RESPONSIBLE FOR
        EVALUATING THEIR FITNESS FOR YOUR INTENDED USE.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLOUDSFORGE AND ITS AFFILIATES
        WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE,
        DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE
        SERVICES. OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO
        THESE TERMS WILL NOT EXCEED THE AMOUNT YOU PAID TO CLOUDSFORGE IN THE
        TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless CloudsForge, its affiliates,
        and personnel from and against any claims, damages, liabilities, and
        expenses (including reasonable attorneys&rsquo; fees) arising out of
        your User Content, your use of the Services in violation of these
        Terms, or your violation of any law or third-party right.
      </p>

      <h2>15. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If a change is material,
        we will provide notice (for example, by posting a notice on the
        website or by email). Your continued use of the Services after the
        updated Terms become effective constitutes acceptance of the changes.
      </p>

      <h2>16. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws applicable at our principal place
        of business, without regard to conflict-of-law principles. Any dispute
        arising out of or related to these Terms or the Services will be
        resolved in the competent courts of that jurisdiction, unless
        applicable consumer protection law grants you the right to bring a
        claim in your country of residence.
      </p>

      <h2>17. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:darren@cloudsforge.com">darren@cloudsforge.com</a>.
      </p>
    </LegalLayout>
  );
}
