import renderMenu from './view/render-view';
import categoryModal from './modal/category-modal';
import './style.scss';

const getMenu = (id) => {
  let menu = categoryModal.getMenu(id);
  renderMenu(menu);
};

// document.querySelector('.options').addEventListener('click', (e) => {
//   if (e.target.classList[1] == 'option') {
//     let id = e.target.innerText;
//     getMenu(id);
//   }
// });

let isMobileMenuOpen = false;
const overlay = document.querySelector('.nav__overlay');
const burger = document.querySelector('.nav__burger');
const navBtn = document.querySelector('.nav__btn')

navBtn.addEventListener('click', () => {
  if (!isMobileMenuOpen) {
    overlay.className += ' active';
    burger.className += ' active';
    isMobileMenuOpen = true;
  } else {
    overlay.classList.remove('active');
    burger.classList.remove('active');
    isMobileMenuOpen = false;
  }
});
