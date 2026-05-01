import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy — CloudsForge",
  description: "CloudsForge refund and return policy.",
  robots: { index: true, follow: true },
};

export default function RefundPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="May 1, 2026"
      eyebrow="Legal"
    >
      <h2>Refunds</h2>
      <p>All sales are final and no refund will be issued.</p>
      <p>
        CloudsForge is a digital product delivered immediately upon purchase
        through a license key. Because access to the software is granted as
        soon as your payment is processed, we do not offer refunds, exchanges,
        or returns once a purchase is complete.
      </p>
      <p>
        Where applicable consumer protection law in your jurisdiction grants
        you a non-waivable right of withdrawal for digital goods, that right
        will continue to apply. By completing a purchase and downloading or
        activating the software, you expressly consent to immediate delivery
        and acknowledge that, where permitted by law, this consent ends any
        statutory right of withdrawal.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions concerning our refund policy, please contact
        us at{" "}
        <a href="mailto:darren@cloudsforge.com">darren@cloudsforge.com</a>.
      </p>
    </LegalLayout>
  );
}
