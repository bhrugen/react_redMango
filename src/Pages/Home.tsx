import React from "react";
import { Banner } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Banner />
      <a
        href="https://dotnetmastery.com/Home/Details?courseId=29"
        target="_blank"
      >
        <div className="btn btn-danger form-control text-center text-white h4">
          This is a demo application based on{" "}
          <span className="text-warning"> Udemy Course by DotNetMastery!</span>{" "}
          To visit the course click on me!
        </div>
      </a>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
