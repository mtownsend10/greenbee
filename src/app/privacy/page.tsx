import type { Metadata } from "next";
import { Underline } from "@/components/illustrations/Underline";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your personal information.`,
};

const EmailLink = () => (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="underline underline-offset-4 decoration-honey decoration-2 break-all"
  >
    {CONTACT_EMAIL}
  </a>
);

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Overview",
    body: (
      <p>
        {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
        privacy. This policy explains what personal information we collect when you visit
        our website or buy from us, how we use it, and the choices you have. By using our
        site, you agree to the practices described here.
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you place an order, contact us, or
          reach out about wholesale, we may collect your name, email address, phone number,
          shipping and billing address, and anything you choose to include in your message.
        </p>
        <p>
          <strong>Order and payment information.</strong> Checkout is handled by Shopify.
          Payment details are processed by Shopify and its payment partners. We never see
          or store your full card number.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most websites, our
          hosting and e-commerce providers automatically log basic technical information
          when you visit, such as your IP address, browser type, device, and the pages you
          view.
        </p>
      </>
    ),
  },
  {
    title: "How we use your information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process, ship, and deliver your orders</li>
          <li>Send order confirmations, shipping updates, and receipts</li>
          <li>Answer your questions and handle returns</li>
          <li>Respond to wholesale inquiries</li>
          <li>Keep our website secure and working properly</li>
          <li>Meet our legal, tax, and accounting obligations</li>
        </ul>
        <p>
          We don&apos;t send marketing emails, and we&apos;ll never add you to a mailing
          list without your permission.
        </p>
      </>
    ),
  },
  {
    title: "How we share your information",
    body: (
      <>
        <p>
          <strong>We don&apos;t sell or rent your personal information.</strong> We only
          share it with the service providers we need to run the business, such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Shopify, which powers our store and checkout</li>
          <li>Payment processors, to handle your payment securely</li>
          <li>Shipping carriers, to deliver your order</li>
          <li>Our website hosting provider</li>
        </ul>
        <p>
          These providers may only use your information to perform services for us. We may
          also share information if required by law, or to protect our rights, our
          customers, or others.
        </p>
      </>
    ),
  },
  {
    title: "Cookies & local storage",
    body: (
      <>
        <p>
          Our site saves the contents of your basket in your browser&apos;s local storage,
          so your items are still there when you come back. This stays on your device and
          isn&apos;t sent to us. You can clear it at any time through your browser settings.
        </p>
        <p>
          When you check out, Shopify uses cookies to make checkout work and keep it secure.
          You can learn more in{" "}
          <a
            href="https://www.shopify.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-honey decoration-2"
          >
            Shopify&apos;s privacy policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "How long we keep your information",
    body: (
      <p>
        We keep order information for as long as we need it to fulfill your order and meet
        our legal, tax, and accounting obligations. We keep messages you send us for as
        long as needed to respond and follow up. When we no longer need your information,
        we delete it.
      </p>
    ),
  },
  {
    title: "Your rights & choices",
    body: (
      <>
        <p>
          You can ask us to access, correct, or delete the personal information we hold
          about you. Depending on where you live, including California and other states with
          privacy laws, you may have additional rights, such as knowing what information we
          collect and how it&apos;s used. We don&apos;t sell or share personal information
          for targeted advertising.
        </p>
        <p>
          To make a request, email us at <EmailLink />. We&apos;ll respond within the time
          required by law, and we won&apos;t treat you differently for exercising your
          rights.
        </p>
      </>
    ),
  },
  {
    title: "Children's privacy",
    body: (
      <p>
        Our site isn&apos;t directed to children under 13, and we don&apos;t knowingly
        collect personal information from them. If you believe a child has given us their
        information, please contact us and we&apos;ll delete it.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        We take reasonable steps to protect your information, and we rely on trusted
        providers like Shopify for secure checkout. No method of sending or storing data
        online is completely secure, though, so we can&apos;t guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we&apos;ll post the updated
        version on this page.
      </p>
    ),
  },
  {
    title: "Contact us",
    body: (
      <p>
        Questions about this policy or your information? Email us at <EmailLink />.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative">
      <section className="border-b-2 border-ink bg-honeycomb">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-20 text-center">
          <p className="font-hand text-2xl text-coral mb-3">the fine print, in plain english</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl tracking-tighter leading-[0.92]">
            Privacy{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">policy</span>
              <Underline variant="swoop" className="absolute top-full mt-1 left-0 w-full text-honey" />
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="font-display font-black text-3xl tracking-tight">{section.title}</h2>
            <div className="mt-4 space-y-4 font-body text-lg text-ink/80 leading-relaxed">
              {section.body}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
