import * as React from "react";

export interface Props {
  active: boolean;
  category: Array<{name: string, url: string}>;
  handleMenuClick: () => void;
}

export const MenuDropdown = ({ active, category, handleMenuClick }: Props) => {
  return (
    <div className={active ? 'dropdown is-active is-right' : 'dropdown'}>
      <MenuButton handleMenuClick={handleMenuClick} />
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {category.map((cat, ndx) => (
            <a
              href={cat.url}
              className="dropdown-item"
              onClick={handleMenuClick}
              key={ndx}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface ButtonProps {
  handleMenuClick: () => void;
}

const MenuButton = ({ handleMenuClick }: ButtonProps) => {
  return (
    <div className="dropdown-trigger">
      <button
        className="button is-dark menu__button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        onClick={handleMenuClick}
      >
        Menu
      </button>
    </div>
  );
}
