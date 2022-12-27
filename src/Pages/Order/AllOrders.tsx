import React from "react";
import { withAdminAuth, withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";

function AllOrders() {
  const { data, isLoading } = useGetAllOrdersQuery("");
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <div className="d-flex align-items-center justify-content-between mx-5 mt-5">
            <h1 className="text-success">Orders List</h1>
            <div className="d-flex" style={{ width: "40%" }}>
              <input
                type="text"
                className="form-control mx-2"
                placeholder="Search Name, Email or Phone"
              />
              <select className="form-select w-50 mx-2">
                <option value="All">All</option>
              </select>
              <button className="btn btn-outline-success">Filter</button>
            </div>
          </div>

          <OrderList isLoading={isLoading} orderData={data.result} />
        </>
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
