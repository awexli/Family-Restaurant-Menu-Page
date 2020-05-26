import util from '../utilities/category-utility';

const menuBody = document.querySelector('.modal-body');
const menuTitle = document.querySelector('.modal-title');

const renderMenu = (menu) => {
  const menuTable = util.populateTable(menu.data);
  menuBody.appendChild(menuTable);
  menuTitle.innerText = menu.name;
};

export default renderMenu;
