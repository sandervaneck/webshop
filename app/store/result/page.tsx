import { stripe } from "@/app/lib/stripe";
import type { Stripe } from "stripe";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  return (
    <>{paymentIntent.status == 'succeeded' && <h2>Thanks for your payment</h2>}
    
      {/* <PrintObject content={checkoutSession} /> */}
    </>
  );
}
