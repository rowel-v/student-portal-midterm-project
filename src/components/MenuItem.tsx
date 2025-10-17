import { motion } from "framer-motion";
import type { MenuItem } from "./types/MenuItem";

interface Props {
  item: MenuItem;
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}

export default function MenuItemComponent({
  item,
  active,
  collapsed,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 group 
        ${
          active
            ? "bg-white/25 text-yellow-300 font-semibold shadow-lg"
            : "hover:bg-white/10 hover:text-yellow-200"
        }`}
    >
      <span className="text-lg">{item.icon}</span>
      {!collapsed && (
        <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
          {item.name}
        </span>
      )}
    </motion.button>
  );
}
