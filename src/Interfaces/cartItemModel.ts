import menuItemModel from "./menuItemModel";

export default interface cartItemModel {
  id?: number;
  menuItemId?: number;
  menuItem?: menuItemModel;
  quantity?: number;
}
