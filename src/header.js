const navbar = () => {
    const name = document.createElement("h3");
    name.innerText = "Zhong Shan Restaurant";
    const subText = document.createElement("p");
    subText.innerText = "Hakka Cuisine";

    const innerFrag = new DocumentFragment();
    innerFrag.appendChild(name);
    innerFrag.appendChild(subText);

    const navContent = document.createElement("div");
    navContent.className = "nav-content";
    navContent.appendChild(innerFrag);

    const nav = document.createElement("div");
    nav.className = "nav-bar";
    nav.appendChild(navContent);

    const navFragment = new DocumentFragment();
    navFragment.appendChild(nav);

    return navFragment;
}

export default navbar;