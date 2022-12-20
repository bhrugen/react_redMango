import React, { useEffect, useState } from "react";
import { inputHelper } from "../../Helper";

const menuItemData = {
  name: "",
  description: "",
  specialTag: "",
  category: "",
  price: "",
};

function MenuItemUpsert() {
  const [menuItemInputs, setMenuItemInputs] = useState(menuItemData);

  const handleMenuItemInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const tempData = inputHelper(e, menuItemInputs);
    setMenuItemInputs(tempData);
  };
  return (
    <div className="container border mt-5 p-5">
      <h3 className="offset-2 px-2 text-success">Add Product</h3>
      <form method="post" encType="multipart/form-data">
        <div className="row mt-3">
          <div className="col-md-5 offset-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              name="name"
              value={menuItemInputs.name}
              onChange={handleMenuItemInput}
            />
            <textarea
              className="form-control mt-3"
              placeholder="Enter Description"
              name="description"
              rows={10}
              value={menuItemInputs.description}
              onChange={handleMenuItemInput}
            ></textarea>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Special Tag"
              name="specialTag"
              value={menuItemInputs.specialTag}
              onChange={handleMenuItemInput}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Category"
              name="category"
              value={menuItemInputs.category}
              onChange={handleMenuItemInput}
            />
            <input
              type="number"
              className="form-control mt-3"
              required
              placeholder="Enter Price"
              name="price"
              value={menuItemInputs.price}
              onChange={handleMenuItemInput}
            />
            <input type="file" className="form-control mt-3" />
            <div className="text-center">
              <button
                type="submit"
                style={{ width: "50%" }}
                className="btn btn-success mt-5"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="https://via.placeholder.com/150"
              style={{ width: "100%", borderRadius: "30px" }}
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MenuItemUpsert;
