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
    case "House Special (特色菜)": // add category names into own object to be exported
      category.houseSpecial();
      break;
    case "Soup (湯羹類)":
      category.soup();
      break;
    case "Beef & Lamb (牛羊類)":
      category.beefLamb();
      break;
    case "Appetizers (餐前小食)":
      category.appetizers();
      break;
    case "Chicken & Duck & Frog (雞鴨田雞類)":
      category.chickenDuckFrog();
      break;
    case "Mu Shu (木須類)":
      category.mushu();
      break;
    case "Pork (豬肉類)":
      category.pork();
      break;
    case "Seafood (海鮮類)":
      category.seafood();
      break;
    case "Crab (蟹)":
      category.crab();
      break;
    case "Lobster (龍蝦)":
      category.lobster();
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
    case "Vegetables (健康素菜類)":
      category.vegetables();
      break;
    case "Rice Plates & Soup (午餐碟飯送例湯)":
      category.ricePlates();
      break;
    case "All-Day Takeaway (全日外賣)":
      category.takeaway();
      break;
    default:
      break;
  }
});
