import type { Metadata } from "next";
import Link from "next/link";
import { Underline } from "@/components/illustrations/Underline";
import { Bee } from "@/components/illustrations/Bee";
import { buttonVariants } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "How and when Green Bee Wraps ships, free US shipping on orders over $50, and our 30-day happiness guarantee on returns.",
};

const AT_A_GLANCE = [
  { n: "5–7", label: "business days to ship", tone: "bg-honey-light" },
  { n: "$50+", label: "orders ship free", tone: "bg-leaf/30" },
  { n: "50", label: "states, anywhere in the US", tone: "bg-sky" },
  { n: "30", label: "days to return", tone: "bg-rose" },
];

type Section = { title: string; body: React.ReactNode };

const SHIPPING_SECTIONS: Section[] = [
  {
    title: "Processing time",
    body: (
      <>
        <p>
          Every wrap is pressed by hand in small batches, so orders ship within{" "}
          <strong>5–7 business days</strong> of being placed. Business days are Monday
          through Friday, excluding US federal holidays.
        </p>
        <p>
          During the holidays or a big restock, processing can take a little longer.
          If your order is going to be delayed, we&apos;ll email you.
        </p>
      </>
    ),
  },
  {
    title: "Where we ship",
    body: (
      <p>
        We ship to all 50 US states. We don&apos;t ship internationally at this time.
      </p>
    ),
  },
  {
    title: "Shipping rates",
    body: (
      <>
        <p>
          <strong>Orders of $50 or more ship free</strong> within the US. The $50 is
          based on your order subtotal after discounts and before taxes.
        </p>
        <p>
          For orders under $50, shipping is calculated at checkout based on your
          address and the shipping method you choose. You&apos;ll always see the exact
          cost before you pay.
        </p>
      </>
    ),
  },
  {
    title: "Delivery estimates",
    body: (
      <p>
        Once your order ships, delivery usually takes 2–8 business days depending on
        where you live and the method you pick at checkout. Delivery times are
        estimates from the carrier and aren&apos;t guaranteed.
      </p>
    ),
  },
  {
    title: "Tracking your order",
    body: (
      <p>
        As soon as your order ships, you&apos;ll get a shipping confirmation email with
        a tracking number. If you haven&apos;t heard from us within 7 business days,
        check your spam folder, then drop us a line.
      </p>
    ),
  },
  {
    title: "Address changes & cancellations",
    body: (
      <>
        <p>
          Need to change your address or cancel? Email us as soon as possible. We can
          make changes any time before your order ships. Once it&apos;s on its way, we
          can&apos;t change it.
        </p>
        <p>
          Please double-check your shipping address at checkout. We aren&apos;t
          responsible for orders sent to an incorrect address. If a package is
          returned to us as undeliverable, we&apos;re happy to reship it, but the new
          shipping cost is on you.
        </p>
      </>
    ),
  },
  {
    title: "Lost, stolen, or damaged packages",
    body: (
      <>
        <p>
          <strong>Marked delivered but not there?</strong>{" "}Check around your door, your
          mailbox, and with neighbors, and give it 48 hours; packages sometimes show
          up a day late. If it still hasn&apos;t turned up, email us and we&apos;ll help
          you file a claim with the carrier.
        </p>
        <p>
          <strong>Arrived damaged?</strong>{" "}Email us within 7 days of delivery with your
          order number and a photo, and we&apos;ll send a replacement.
        </p>
        <p>
          Once a package is handed to the carrier, it&apos;s out of our hands, and
          we&apos;re not responsible for packages that are lost or stolen after
          delivery. We&apos;ll always do what we can to help, though.
        </p>
      </>
    ),
  },
  {
    title: "Packaging",
    body: (
      <p>
        Every order ships in plastic-free packaging.
      </p>
    ),
  },
];

const RETURN_SECTIONS: Section[] = [
  {
    title: "Our 30-day happiness guarantee",
    body: (
      <p>
        We want you to love your wraps. If something isn&apos;t right, email us within{" "}
        <strong>30 days of delivery</strong>{" "}and we&apos;ll make it right.
      </p>
    ),
  },
  {
    title: "Unused wraps",
    body: (
      <p>
        Unused wraps in their original condition can be returned within 30 days for a
        full refund of the item price. Return shipping is paid by you, and original
        shipping charges aren&apos;t refundable.
      </p>
    ),
  },
  {
    title: "Used wraps",
    body: (
      <p>
        Because our wraps touch food, we can&apos;t accept used wraps back for resale.
        If a wrap has a defect, like cracking, flaking, or losing its cling well before
        it should, email us with a photo and we&apos;ll send a replacement.
      </p>
    ),
  },
  {
    title: "Damaged, defective, or wrong items",
    body: (
      <p>
        If your order arrives damaged or we sent the wrong thing, email us within 7
        days of delivery with your order number and a photo. We&apos;ll send a
        replacement or issue a refund, and you won&apos;t pay a thing for shipping.
      </p>
    ),
  },
  {
    title: "How to start a return",
    body: (
      <>
        <p>
          Email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-4 decoration-honey decoration-2 break-all"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          with your order number and what went wrong. Please don&apos;t send anything
          back before you hear from us; we&apos;ll reply with the return address and
          next steps.
        </p>
        <p>
          Want a different pattern or size? The quickest way is to return the unused
          wraps and place a new order.
        </p>
      </>
    ),
  },
  {
    title: "Refunds",
    body: (
      <p>
        Once we receive and check your return, we&apos;ll email you and refund your
        original payment method within 5 business days. Depending on your bank, it can
        take another 5–10 business days for the refund to show up.
      </p>
    ),
  },
];

export default function ShippingPage() {
  return (
    <div className="relative">
      <section className="border-b-2 border-ink bg-honeycomb">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 text-center relative">
          <p className="font-hand text-2xl text-coral mb-3">from our garage to your door</p>
          <h1 className="font-display font-black text-6xl sm:text-7xl tracking-tighter leading-[0.92]">
            Shipping &amp;{" "}
            <span className="relative inline-block">
              <span className="italic text-forest">returns</span>
              <Underline variant="swoop" className="absolute top-full mt-1 left-0 w-full text-honey" />
            </span>
          </h1>
          <Bee size={100} className="absolute top-10 right-10 rotate-12 hidden md:block" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {AT_A_GLANCE.map((item) => (
            <div
              key={item.label}
              className={`${item.tone} border-2 border-ink rounded-2xl p-5 shadow-[4px_4px_0_0_var(--ink)] text-center`}
            >
              <dt className="font-display font-black text-4xl text-forest tabular-nums">{item.n}</dt>
              <dd className="font-body text-sm text-ink/75 mt-1">{item.label}</dd>
            </div>
          ))}
        </dl>

        {[
          { id: "shipping", heading: "Shipping", sections: SHIPPING_SECTIONS },
          { id: "returns", heading: "Returns", sections: RETURN_SECTIONS },
        ].map((group) => (
          <div key={group.id} id={group.id} className="scroll-mt-28 mb-20 last:mb-0">
            <p className="font-hand text-3xl text-coral border-b-2 border-dashed border-ink/30 pb-3 mb-10">
              {group.heading}
            </p>
            <div className="space-y-12">
              {group.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display font-black text-3xl tracking-tight">{section.title}</h2>
                  <div className="mt-4 space-y-4 font-body text-lg text-ink/80 leading-relaxed">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center bg-forest text-cream border-2 border-ink rounded-3xl p-10 shadow-[8px_8px_0_0_var(--ink)]">
          <p className="font-hand text-2xl text-honey-light mb-2">questions about an order?</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl">We&apos;re happy to help.</h2>
          <p className="mt-3 font-body text-cream/80">
            Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-4 decoration-honey break-all"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with your order number.
          </p>
          <div className="mt-6 inline-block">
            <Link href="/contact" className={buttonVariants({ variant: "honey", size: "lg" })}>
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
