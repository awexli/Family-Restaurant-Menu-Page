const navbar = () => {
  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.alt = "Zhong Shan Logo"
  const navContent = document.createElement("div");
  navContent.className = "nav-content";
  navContent.appendChild(logo);

  const nav = document.createElement("div");
  nav.className = "nav-bar";
  nav.appendChild(navContent);

  const navFragment = new DocumentFragment();
  navFragment.appendChild(nav);

  return navFragment;
};

export default navbar;
