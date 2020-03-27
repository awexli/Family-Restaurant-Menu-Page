import navbar from "./header";
import options from "./options";
import footer from "./footer";
import category from "./category";

const fragment = new DocumentFragment();
const contents = [navbar(), options.mainFragment(), footer.footerFragment()];

for (let item of contents) {
  fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);

document.addEventListener("click", (e) => {
  const buttonName = e.target.innerText;
  switch (buttonName) {
    case "House Special (特色菜)":
      category.houseSpecial();
      break;
    case "Soup":
      break;
    case "Beef & Lamb":
      break;
    case "Appetizers (餐前小食)":
      category.appetizers();
      break;
    case "Chicken & Duck & Frog":
      break;
    case "Mu Shu (木須類)":
      category.mushu();
      break;
    case "Seafood":
      break;
    case "Crab & Lobster":
      break;
    case "Clay Pot (煲仔類)":
      category.clayPot();
      break;
    case "Lettuce Wraps (生菜包)":
      category.lettuceWrap();
      break;
    case "Chow Mein & Fun (粉麵類)":
      category.chowMeinFun();
      break;
    case "Fried Rice (炒飯類)":
      category.friedRice();
      break;
    case "Congee (粥類)":
      category.congee();
      break;
    default:
      break;
  }
});
