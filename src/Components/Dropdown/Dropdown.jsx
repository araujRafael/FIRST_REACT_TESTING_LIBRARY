/*
 * 1 - start this component closed
 * 2 - show options menu when open
 * 3 - when selected item menu, close dropdown and show options selected
 */
// TDD => write tests before create app

import React, { useState } from "react";

export function Dropdown({ title, pokemons,onSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelection = (selection) => {
    setIsOpen(!isOpen);
    onSelected(selection);
  };
  return (
    <div className="c_dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <ul role="menu">
        {isOpen &&
          pokemons.map((poke, index) => {
            return (
              <li
                role="menuitem"
                key={index}
                onClick={() => handleSelection(poke)}
              >
                {poke}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
