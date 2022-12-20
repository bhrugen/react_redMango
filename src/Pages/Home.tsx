import React from "react";
import { Banner } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Banner />
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
