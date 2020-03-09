import navbar from './header';

const fragment = new DocumentFragment();
const contents = [navbar()];

for (let item of contents) {
    fragment.appendChild(item);
}

document.querySelector(".wrapper").appendChild(fragment);