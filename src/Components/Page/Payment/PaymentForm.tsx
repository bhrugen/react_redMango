import { PaymentElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  return (
    <form>
      <PaymentElement />
      <button className="btn btn-success mt-5 w-100">Submit</button>
    </form>
  );
};

export default PaymentForm;
