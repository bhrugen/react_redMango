import { PaymentElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default PaymentForm;
