import React, { useEffect, useState } from "react";
import { withAdminAuth } from "../../HOC";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import OrderList from "../../Components/Page/Order/OrderList";
import { MainLoader } from "../../Components/Page/Common";
import { inputHelper } from "../../Helper";
import { SD_Status } from "../../Utility/SD";

const filterOptions = [
  "All",
  SD_Status.CONFIRMED,
  SD_Status.BEING_COOKED,
  SD_Status.READY_FOR_PICKUP,
];
function AllOrders() {
  const [orderData, setOrderData] = useState([]);
  const [filters, setFilters] = useState({ searchString: "", status: "" });
  const [loading, setLoading] = useState(false);
  const [apiFilters, setApiFilters] = useState({
    searchString: "",
    status: "",
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageOptions, setPageOptions] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const { data, isLoading } = useGetAllOrdersQuery({
    ...(apiFilters && {
      searchString: apiFilters.searchString,
      status: apiFilters.status,
    }),
    pageNumber: pageOptions.pageNumber,
    pageSize: pageOptions.pageSize,
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
      setOrderData(data.apiResponse.result);
      const { TotalRecords } = JSON.parse(data.TotalRecords);
      setTotalRecords(TotalRecords);
      setLoading(false);
    }
  }, [data]);

  const getPageDetails = () => {
    const dataStartNumber =
      (pageOptions.pageNumber - 1) * pageOptions.pageSize + 1;
    const dataEndNumber = pageOptions.pageNumber * pageOptions.pageSize;

    return `${dataStartNumber}
             - 
            ${
              dataEndNumber < totalRecords ? dataEndNumber : totalRecords
            } of ${totalRecords}`;
  };

  const handleButtonClick = (direction: string) => {
    setLoading(true);
    if (direction === "prev") {
      setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber - 1 });
    } else if (direction === "next") {
      setPageOptions({ pageSize: 5, pageNumber: pageOptions.pageNumber + 1 });
    }
  };

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
          <div className="d-flex mx-5 justify-content-end align-items-center">
            <div className="mx-2">{getPageDetails()}</div>
            <div>
              <button
                onClick={() => handleButtonClick("prev")}
                disabled={pageOptions.pageNumber === 1}
                className="btn btn-outline-primary px-3 mx-2"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                onClick={() => handleButtonClick("next")}
                disabled={
                  pageOptions.pageNumber * pageOptions.pageSize >= totalRecords
                }
                className="btn btn-outline-primary px-3"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
