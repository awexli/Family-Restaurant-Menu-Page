import * as React from 'react';

interface MenuArrowProps {
  arrow: HTMLElement;
  handleJump: string;
  label: string;
}

export const MenuArrow = ({ arrow, handleJump, label }: MenuArrowProps) => {
  return (
    <a
      href={handleJump}
      className="menu__button button is-dark"
      aria-label={label}
    >
      {arrow}
    </a>
  );
};
