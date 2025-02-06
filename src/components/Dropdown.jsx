import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import React, { useState } from 'react';

export default function Dropdown({ items }) {
  const [label, setLabel] = useState("Select Buildings");
  const [subLabel, setSubLabel] = useState("-");

  const changeName = (text) => {
    setLabel(text);
  };

  const currentBuilding = items.find(item => item.label === label);

  // Ensure that 'sub' is an array and safely access it
  const subcategories = Array.isArray(currentBuilding?.sub) ? currentBuilding.sub : [];

  return (
    <div className="flex justify-between w-[960px]">
      {/* First Dropdown */}
      <Menu as="div" className="relative inline-block z-10">
        <MenuButton className="shadow-xl bg-white px-4 py-2 rounded-lg w-[240px] font-bold text-left">
          {label}
        </MenuButton>
        <MenuItems className="absolute mt-2 w-[240px] bg-white shadow-lg rounded-lg p-2 z-20">
          {items.map((item) => (
            <MenuItem
              key={item.label}
              as="button"
              onClick={() => {
                changeName(item.label);
                setSubLabel(item.sub[0]);  // Reset subLabel when category changes
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      {/* Second Dropdown */}
      <Menu as="div" className="relative inline-block z-10">
        <MenuButton className="w-[240px] shadow-xl bg-white px-4 py-2 rounded-lg font-bold text-left">
          {subLabel}
        </MenuButton>
        <MenuItems className="absolute mt-2 w-[240px] bg-white shadow-lg rounded-lg p-2 z-20">
          {subcategories.length > 0 ? (
            subcategories.map((i) => (
              <MenuItem
                key={i}
                as="button"
                onClick={() => setSubLabel(i)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {i}
              </MenuItem>
            ))
          ) : (
            <MenuItem
              as="button"
              disabled
              className="block w-full px-4 py-2 text-left text-gray-500"
            >
              No room available
            </MenuItem>
          )}
        </MenuItems>
      </Menu>
    </div>
  );
}
