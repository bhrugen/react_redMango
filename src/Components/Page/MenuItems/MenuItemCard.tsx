import React from "react";
import { menuItemModel } from "../../../Interfaces";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  return <div>{props.menuItem.name}</div>;
}

export default MenuItemCard;
