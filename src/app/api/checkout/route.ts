import { createCheckout } from "@/lib/shopify/client";

type CheckoutLine = { variantId: string; quantity: number };

export async function POST(request: Request) {
  let lines: CheckoutLine[];
  try {
    const body = (await request.json()) as { lines?: CheckoutLine[] };
    lines = (body.lines ?? []).filter(
      (l) => typeof l.variantId === "string" && Number.isInteger(l.quantity) && l.quantity > 0,
    );
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (lines.length === 0) {
    return Response.json({ error: "Your basket is empty" }, { status: 400 });
  }

  try {
    const result = await createCheckout(lines);
    return Response.json(result, { status: "error" in result ? 422 : 200 });
  } catch {
    return Response.json({ error: "Checkout is unavailable right now" }, { status: 502 });
  }
}
