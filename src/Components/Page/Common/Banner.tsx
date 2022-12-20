import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchItem } from "../../../Storage/Redux/menuItemSlice";
import "./banner.css";
function Banner() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchItem(e.target.value));
    setValue(e.target.value);
  };

  return (
    <div className="custom-banner">
      <div
        className="m-auto d-flex align-items-center"
        style={{
          width: "400px",
          height: "50vh",
        }}
      >
        <div className="d-flex align-items-center" style={{ width: "100%" }}>
          <input
            type={"text"}
            className="form-control rounded-pill"
            style={{
              width: "100%",
              padding: "20px 20px",
            }}
            value={value}
            onChange={handleChange}
            placeholder="Search for Food Items!"
          />
          <span style={{ position: "relative", left: "-43px" }}>
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
