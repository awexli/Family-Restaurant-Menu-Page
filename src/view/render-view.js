import util from "../utilities/category-utility";
import header from "./header";
import options from "./options";
import footer from "./footer";

const fragment = new DocumentFragment();
const contents = [header.navbarFragment(), options.mainFragment(), footer.footerFragment()];

for (let item of contents) {
  fragment.appendChild(item);
}

//document.querySelector(".wrapper").appendChild(fragment);

const renderMenu = (menu) => {
  util.populateTable(menu.data, menu.name)
};

export default renderMenu;