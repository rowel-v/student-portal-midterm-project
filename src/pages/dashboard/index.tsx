import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, Bell, Search, User } from "lucide-react";
import Sidebar from "../../components/Sidebar";

// Section imports
import DashboardMain from "./DashboardMain";
import Courses from "./Courses";
import Assignments from "./Assignments";
import Grades from "./Grades";
import Calendar from "./Calendar";
import Payments from "./Payments";
import Settings from "./Settings";

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications] = useState(3); // Mock notification count

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "null");
    if (!loggedUser) {
      navigate("/");
      return;
    }
    setUsername(loggedUser.username);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <DashboardMain username={username} />;
      case "Courses":
        return <Courses />;
      case "Assignments":
        return <Assignments />;
      case "Grades":
        return <Grades />;
      case "Calendar":
        return <Calendar />;
      case "Payments":
        return <Payments />;
      case "Settings":
        return <Settings />;
      default:
        return <DashboardMain username={username} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white font-sans relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Menu Icon (when sidebar hidden) */}
      {!sidebarOpen && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setSidebarOpen(true)}
          className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-3 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Menu size={20} />
        </motion.button>
      )}

      {/* Sidebar */}
      <Sidebar
        username={username}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <motion.main
        className="flex-1 p-6 lg:p-8 overflow-y-auto relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Top Right Actions - Keep only these for all pages */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 hover:bg-white/15 transition-all duration-300">
              <Search className="w-4 h-4 text-white/60 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-white placeholder-white/40 w-32 lg:w-48"
              />
            </div>

            {/* Notifications */}
            <button className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <Bell className="w-5 h-5 text-white" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </button>

            {/* User Profile */}
            <button className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Main Section Content */}
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-white/40 text-sm"
        >
          <p>Student Portal v1.0 • Stay organized and productive! 🚀</p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
