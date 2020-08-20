import * as React from 'react';

interface Props {
  active: boolean;
  category: Array<{ name: string; url: string }>;
  handleMenuClick: () => void;
}

export const MenuDropdown = ({ active, category, handleMenuClick }: Props) => {
  return (
    <div className={active ? 'dropdown is-active is-right' : 'dropdown'}>
      <MenuButton handleMenuClick={handleMenuClick} />
      <DropdownMenu category={category} handleMenuClick={handleMenuClick} />
    </div>
  );
};

interface ButtonProps {
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
};

interface DrowdownMenuProps {
  category: Array<{ name: string; url: string }>;
  handleMenuClick: () => void;
}

const DropdownMenu = ({ category, handleMenuClick }: DrowdownMenuProps) => {
  return (
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {category.map((cat, ndx) => (
          <a
            href={cat.url}
            className="dropdown-item"
            onClick={handleMenuClick} // to close dropdown menu
            key={ndx}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
};
