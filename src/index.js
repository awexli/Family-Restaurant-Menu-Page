import navbar from './header';
import main from './main';
import footer from './footer';

const fragment = new DocumentFragment();
const contents = [navbar(), main(), footer()];

for (let item of contents) {
    fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);