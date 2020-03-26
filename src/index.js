import navbar from './header';
import main from './main';
import footer from './footer';
import category from './category'

const overlay = document.getElementById("overlay-nav");
const menuImg = document.querySelector(".menu");
const fragment = new DocumentFragment();
const contents = [navbar(), main.mainFragment(), footer.footerFragment()];

for (let item of contents) {
    fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);

document.addEventListener("click", e => {
    let className = e.target.className;
    console.log(e.target)
    switch(e.target.innerText) {
        case "House Special":
            overlay.style.height = "100%"; // change this to when click on cell
            category.houseSpecial();
            footer.footerTag().style = "visibility: hidden";
            main.mainTag().style = "visibility: hidden";
            document.body.style.position = "fixed";
            // move to top of overlay page
            break;
        case  "Soup":
            menuImg.src = "./img/soup.png"
            overlay.style.height = "100%";
            break;
        case  "Beef & Lamb":
            menuImg.src = "./img/beef_lamb.png"
            overlay.style.height = "100%";
            break;
        case  "Appetizers":
            menuImg.src = "./img/appetizers.png"
            overlay.style.height = "100%";
            break;
        case  "Chicken & Duck & Frog":
            menuImg.src = "./img/chicken_duck_frog.png"
            overlay.style.height = "100%";
            break;
        case  "Pork & Mu Shu":
            menuImg.src = "./img/pork_mushu.png"
            overlay.style.height = "100%";
            break;
        case  "Seafood":
            menuImg.src = "./img/seafood.png"
            overlay.style.height = "100%";
            break;
        case  "Crab & Lobster":
            menuImg.src = "./img/crab_lobster.png"
            overlay.style.height = "100%";
            break;
        case  "Hot Pot":
            menuImg.src = "./img/hot_pot.png"
            overlay.style.height = "100%";
            break;
        case  "Lettuce Wraps & Vegetables":
            menuImg.src = "./img/lettucewraps_vegetables.png"
            overlay.style.height = "100%";
            break;
        case  "Chow Mein & Fun":
            overlay.style.height = "100%";
            category.chowMeinFun();
            footer.footerTag().style = "visibility: hidden";
            main.mainTag().style = "visibility: hidden";
            document.body.style.position = "fixed";
            break;
        case  "Fried Rice":
            menuImg.src = "./img/fried_rice.png"
            overlay.style.height = "100%";
            break;
        case  "Congee":
            menuImg.src = "./img/congee.png"
            overlay.style.height = "100%";
            break;
        default:
            break;
    }

    if (className == "overlay" || 
        className == "overlay-content" ||
        className == "back") {
        overlay.style.height = "0%"
        footer.footerTag().style = "visibility: visible";
        main.mainTag().style = "visibility: visible";
        document.body.style.position = "";
        document.body.style.top = "";
    }
})