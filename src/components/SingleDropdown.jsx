import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useState } from "react";

export default function SingleDropdown({ items , initialValue }) {
  const [selected, setSelected] = useState(initialValue  || "Select");

  return (
    <div className="relative inline-block text-left  border-1 rounded-lg">
      <Menu>
        <MenuButton className="flex items-center justify-between w-[412px] px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none">
          {selected}
        </MenuButton>

        <MenuItems className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-auto max-h-60">

          {items.map((item, index) => (
            <MenuItem key={index} as="div">
              {({ active }) => (
                <button
                  onClick={() => setSelected(item)}
                  className={`block w-full text-left px-4 py-2 text-gray-700 ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  {item}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
