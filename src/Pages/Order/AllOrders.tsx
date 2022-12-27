import React, { useEffect, useState } from "react";
import { withAdminAuth, withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import { inputHelper } from "../../Helper";
import { SD_Status } from "../../Utility/SD";
import { orderHeaderModel } from "../../Interfaces";

function AllOrders() {
  const { data, isLoading } = useGetAllOrdersQuery("");
  const [orderData, setOrderData] = useState([]);
  const [filters, setFilters] = useState({ searchString: "", status: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempValue = inputHelper(e, filters);
    setFilters(tempValue);
  };

  const handleFilters = () => {
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

  useEffect(() => {
    if (data) {
      setOrderData(data.result);
    }
  }, [data]);

  const filterOptions = [
    "All",
    SD_Status.CONFIRMED,
    SD_Status.BEING_COOKED,
    SD_Status.READY_FOR_PICKUP,
  ];
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
                placeholder="Search Name or mobile"
                name="searchString"
                value={filters.searchString}
                onChange={handleChange}
              />
              <select
                className="form-select w-50 mx-2"
                name="status"
                value={filters.status}
                onChange={handleChange}
              >
                {filterOptions.map((item) => (
                  <option value={item === "All" ? "" : item}>{item}</option>
                ))}
              </select>
              <button
                className="btn btn-outline-success"
                onClick={handleFilters}
              >
                Filter
              </button>
            </div>
          </div>
          <OrderList isLoading={isLoading} orderData={orderData} />
        </>
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
