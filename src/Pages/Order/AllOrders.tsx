import React, { useEffect, useState } from "react";
import { withAdminAuth } from "../../HOC";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import { inputHelper } from "../../Helper";
import { SD_Status } from "../../Utility/SD";

function AllOrders() {
  const [orderData, setOrderData] = useState([]);
  const [filters, setFilters] = useState({ searchString: "", status: "" });
  const [loading, setLoading] = useState(false);
  const [apiFilters, setApiFilters] = useState({
    searchString: "",
    status: "",
  });
  const { data, isLoading } = useGetAllOrdersQuery({
    ...(apiFilters && {
      searchString: apiFilters.searchString,
      status: apiFilters.status,
    }),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempValue = inputHelper(e, filters);
    setFilters(tempValue);
  };

  const handleFilters = () => {
    setApiFilters({
      searchString: filters.searchString,
      status: filters.status,
    });
    setLoading(true);
  };

  useEffect(() => {
    if (data) {
      setOrderData(data.result);
      setLoading(false);
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
          {loading && <MainLoader />}
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
