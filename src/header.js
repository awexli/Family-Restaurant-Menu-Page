import logoHakka from "./assets/logo.png";
const navbar = () => {
  // Logo
  const logo = document.createElement("img");
  logo.src = logoHakka;
  logo.alt = "Zhong Shan Logo";

  const navContent = document.createElement("div");
  navContent.className = "nav-content";
  navContent.appendChild(logo);

  const nav = document.createElement("div");
  nav.className = "nav-bar";
  nav.appendChild(logo);

  const navFragment = new DocumentFragment();
  navFragment.appendChild(nav);

  return navFragment;
};

export default navbar;
