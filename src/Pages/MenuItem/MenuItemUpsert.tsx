import React from "react";

function MenuItemUpsert() {
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
            />
            <textarea
              className="form-control mt-3"
              placeholder="Enter Description"
            ></textarea>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Special Tag"
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Category"
            />
            <input
              type="number"
              className="form-control mt-3"
              required
              placeholder="Enter Price"
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
