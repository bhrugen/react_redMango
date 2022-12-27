import React, { useEffect, useState } from "react";
import { withAdminAuth, withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import { orderHeaderModel } from "../../Interfaces";

interface filterType {
  searchString: string;
  status: string;
}

function AllOrders() {
  const [orderData, setOrderData] = useState<Array<orderHeaderModel>>([]);
  const [filters, setFilters] = useState<any>(null);
  const { data, isLoading } = useGetAllOrdersQuery("");

  useEffect(() => {
    if (data) {
      setOrderData(data.result);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    get_filters(filters);
  }, [filters]);

  const get_filters = async (filters: filterType) => {
    // search
    const tempData = data.result.filter((orderData: orderHeaderModel) => {
      if (
        (orderData.pickupName &&
          orderData.pickupName.includes(filters.searchString)) ||
        (orderData.pickupPhoneNumber &&
          orderData.pickupPhoneNumber.includes(filters.searchString))
      )
        return orderData;
    });

    // sort

    const finalArray = tempData.filter((orderData: orderHeaderModel) =>
      filters.status !== "" ? orderData.status === filters.status : orderData
    );
    setOrderData(finalArray);
  };

  const handleFilters = ({ searchString, status }: filterType) => {
    setFilters({ searchString, status });
  };

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <OrderList
          isLoading={isLoading}
          orderData={orderData}
          handleFilters={handleFilters}
        />
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
