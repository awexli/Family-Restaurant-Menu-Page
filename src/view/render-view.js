import util from "../utilities/category-utility";

const renderMenu = (menu) => {
  util.populateTable(menu.data, menu.name)
};

export default renderMenu;