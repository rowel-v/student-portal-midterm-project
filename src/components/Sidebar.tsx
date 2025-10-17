import { motion } from "framer-motion";
import {
  X,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  GraduationCap,
  CalendarDays,
  CreditCard,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

interface SidebarProps {
  username: string;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  username,
  activeMenu,
  setActiveMenu,
  sidebarOpen,
  toggleSidebar,
  onLogout,
}) => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Courses", icon: <BookOpen size={18} /> },
    { name: "Assignments", icon: <ClipboardList size={18} /> },
    { name: "Grades", icon: <GraduationCap size={18} /> },
    { name: "Calendar", icon: <CalendarDays size={18} /> },
    { name: "Payments", icon: <CreditCard size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -280,
          width: sidebarOpen ? 256 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed lg:relative h-screen bg-blue-800/80 backdrop-blur-md text-white shadow-lg flex flex-col z-50"
      >
        {/* Header - Fixed */}
        <div className="flex-shrink-0">
          <div className="flex justify-between items-center p-4 border-b border-blue-600 min-w-[256px]">
            <motion.h1
              initial={{ opacity: 1 }}
              animate={{ opacity: sidebarOpen ? 1 : 0 }}
              className="text-[23px] font-semibold whitespace-nowrap"
            >
              Student Portal
            </motion.h1>
            <button
              onClick={toggleSidebar}
              className="hover:text-yellow-300 transition-transform duration-200 hover:rotate-90"
            >
              <X size={22} />
            </button>
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: sidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center py-6 border-b border-blue-600 min-w-[256px]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center text-3xl font-bold shadow-lg"
            >
              👤
            </motion.div>
            <h2 className="mt-2 text-lg font-semibold whitespace-nowrap">
              {username || "Student"}
            </h2>
            <p className="text-sm text-blue-200">Active Account</p>
          </motion.div>
        </div>

        {/* Navigation Menu - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col p-2 space-y-1 min-w-[256px]">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 min-w-[224px] ${
                  activeMenu === item.name
                    ? "bg-blue-600 text-yellow-300 shadow-md"
                    : "hover:bg-blue-700"
                }`}
              >
                {item.icon}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: sidebarOpen ? 1 : 0 }}
                >
                  {item.name}
                </motion.span>
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Logout - Fixed at bottom */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: sidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 border-t border-blue-600 min-w-[256px]"
          >
            <button
              onClick={onLogout}
              className="flex items-center justify-center gap-2 w-full bg-white text-blue-700 py-2 rounded-lg hover:bg-blue-100 transition-all duration-200"
            >
              <LogOut size={18} />
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: sidebarOpen ? 1 : 0 }}
              >
                Logout
              </motion.span>
            </button>
          </motion.div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button - Shows when sidebar is closed */}
      {!sidebarOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 lg:hidden"
        >
          <Menu size={20} />
        </motion.button>
      )}
    </>
  );
};

export default Sidebar;
