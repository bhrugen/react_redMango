import React from "react";
import { withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import { SD_Status } from "../../Utility/SD";

const filterOptions = [
  "All",
  SD_Status.CONFIRMED,
  SD_Status.BEING_COOKED,
  SD_Status.READY_FOR_PICKUP,
  SD_Status.CANCELLED,
];

function MyOrders() {
  const userId = useSelector((state: RootState) => state.userAuthStore.id);
  const { data, isLoading } = useGetAllOrdersQuery(userId);
  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <div className="d-flex align-items-center justify-content-between mx-5 mt-5">
            <h1 className="text-success">My Orders</h1>
          </div>

          <OrderList isLoading={isLoading} orderData={data.result} />
        </>
      )}
    </>
  );
}

export default withAuth(MyOrders);
