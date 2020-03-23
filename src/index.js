import navbar from './header';
import main from './main';
import footer from './footer';

const overlay = document.getElementById("overlay-nav");
const fragment = new DocumentFragment();
const contents = [navbar(), main(), footer()];

for (let item of contents) {
    fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);

document.addEventListener("click", e => {
    
    switch(e.target.className) {
        case "open-menu":
            overlay.style.height = "100%";
            break;
        case  "close-menu":
            overlay.style.height = "0%";
            break;
        default:
            break;
    }
})