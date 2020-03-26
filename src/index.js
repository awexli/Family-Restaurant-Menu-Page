import navbar from "./header";
import main from "./main";
import footer from "./footer";
import category from "./category";

const fragment = new DocumentFragment();
const contents = [navbar(), main.mainFragment(), footer.footerFragment()];

for (let item of contents) {
  fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);

document.addEventListener("click", (e) => {
  if (e.target.innerText == "House Special") {
    category.houseSpecial();
  }
  switch (e.target.innerText) {
    case "House Special":
      category.houseSpecial();
      break;
    case "Soup":
      break;
    case "Beef & Lamb":
      break;
    case "Appetizers":
      break;
    case "Chicken & Duck & Frog":
      break;
    case "Pork & Mu Shu":
      break;
    case "Seafood":
      break;
    case "Crab & Lobster":
      break;
    case "Hot Pot":
      break;
    case "Lettuce Wraps & Vegetables":
      break;
    case "Chow Mein & Fun":
      category.chowMeinFun();
      break;
    case "Fried Rice":
      break;
    case "Congee":
      break;
    default:
      break;
  }
});
