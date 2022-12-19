import React from "react";
import { orderSummaryProps } from "./orderSummaryProps";

function OrderSummary({ data, userInput }: orderSummaryProps) {
  return (
    <div>
      {" "}
      <h3 className="text-success">Order Summary</h3>
      <div className="mt-3">
        <div className="border py-3 px-2">Name : </div>
        <div className="border py-3 px-2">Email : </div>
        <div className="border py-3 px-2">Phone : </div>
        <div className="border py-3 px-2">
          <h4 className="text-success">Menu Items</h4>
          <div className="p-3">
            <div className="d-flex">
              <div className="d-flex w-100 justify-content-between">
                <p>Menu Item Name</p>
                <p>$10 x 10 =</p>
              </div>
              <p style={{ width: "70px", textAlign: "right" }}>$100</p>
            </div>
            <hr />
            <h4 className="text-danger" style={{ textAlign: "right" }}>
              $100
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
