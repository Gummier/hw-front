import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import React, {useState} from "react";
import { useBooking } from "./BookingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropdown({ items }) {
  const { label, setLabel, subLabel, setSubLabel } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const currentBuilding = items.find((item) => item.label === label);
  const subcategories = Array.isArray(currentBuilding?.sub) ? currentBuilding.sub : [];

  return (
    <div className="flex justify-between w-[960px]">
      {/* First Dropdown */}
      <Menu as="div" className="relative inline-block z-10">
        <MenuButton className="shadow-xl bg-white px-4 py-2 rounded-lg w-[240px] font-bold text-left" onClick={() => setIsOpen((prev) => !prev)}>
          {label}
        </MenuButton>
        <AnimatePresence>
        {isOpen && (

          <MenuItems 
            as={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute mt-2 w-[240px] bg-white shadow-lg rounded-lg p-2 z-20">

            {items.map((item) => (
              <MenuItem
              key={item.label}
              as="button"
              onClick={() => {
                setLabel(item.label);
                setSubLabel(item.sub[0]); // Reset subLabel when category changes
                setIsOpen(false); // Close dropdown after selection
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {item.label}
            </MenuItem>
            ))}
          </MenuItems>
        )}
        </AnimatePresence>
      </Menu>

      {/* Second Dropdown */}
      <Menu as="div" className="relative inline-block z-10">
        <MenuButton
          className="w-[240px] shadow-xl bg-white px-4 py-2 rounded-lg font-bold text-left"
          onClick={() => setIsSubOpen(!isSubOpen)}
        >
          {subLabel || "Select a room"}
        </MenuButton>
        <AnimatePresence>
          {isSubOpen && (
            <MenuItems
              as={motion.div}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute mt-2 w-[240px] bg-white shadow-lg rounded-lg p-2 z-20"
            >
              {subcategories.length > 0 ? (
                subcategories.map((i) => (
                  <MenuItem
                    key={i}
                    as="button"
                    onClick={() => {
                      setSubLabel(i);
                      setIsSubOpen(false); // Close dropdown after selection
                    }}
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
          )}
        </AnimatePresence>
      </Menu>
    </div>
  );
}
