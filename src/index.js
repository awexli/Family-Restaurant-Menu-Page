import renderMenu from "./view/render-view";
import categoryModal from "./modal/category-modal";
import "./style.scss";

const getMenu = (id) => {
  let menu = categoryModal.getMenu(id);
  renderMenu(menu);
};

document.querySelector(".options").addEventListener("click", (e) => {
  if (e.target.classList[1] == "option") {
    let id = e.target.innerText;
    getMenu(id);
  }
});
