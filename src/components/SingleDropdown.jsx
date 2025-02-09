import { Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function SingleDropdown({ items , initialValue }) {
  const [selected, setSelected] = useState(initialValue  || "Select");
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left  border-1 rounded-lg">
      <Menu>
        <MenuButton className="flex items-center justify-between w-[412px] px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none" onClick={() => setIsOpen((prev) => !prev)}>
          {selected}
        </MenuButton>

        {/* <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          > */}

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
          
        {/* </MenuItems> */}
      </Menu>
    </div>
  );
}
