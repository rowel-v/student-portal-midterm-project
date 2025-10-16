import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true); // <-- track sidebar state

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

  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Profile", icon: "👤" },
    { name: "Schedule", icon: "🗓️" },
    { name: "Subjects", icon: "📚" },
    { name: "Grades", icon: "🧾" },
    { name: "Attendance", icon: "📆" },
    { name: "Tuition Fees", icon: "💰" },
    { name: "Payment History", icon: "💳" },
    { name: "Messages", icon: "✉️" },
    { name: "Documents", icon: "📂" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white font-sans">
      {/* Left Sidebar Menu */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-blue-600/30 backdrop-blur-lg p-6 border-r border-white/20 relative transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 right-4 text-white bg-blue-700/50 hover:bg-blue-700 p-1 rounded-full transition"
        >
          {sidebarOpen ? "⬅️" : "➡️"}
        </button>

        <h2
          className={`text-2xl font-bold mb-6 text-center ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          🎓 Student Portal
        </h2>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
                activeMenu === item.name
                  ? "bg-white/25 text-yellow-300 font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="absolute bottom-6 left-0 w-full px-6">
            <button
              onClick={handleLogout}
              className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl shadow hover:bg-blue-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className="flex-1 p-10 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">
            {activeMenu === "Dashboard" ? (
              <>
                🎓 Welcome, <span className="text-yellow-300">{username}</span>!
              </>
            ) : (
              <>
                {menuItems.find((m) => m.name === activeMenu)?.icon}{" "}
                {activeMenu}
              </>
            )}
          </h1>
        </div>

        {/* Content based on selected menu */}
        {activeMenu === "Dashboard" && (
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:bg-white/30 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold mb-2">📋 Student Profile</h2>
              <p>View and update your student information.</p>
            </motion.div>

            <motion.div
              className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:bg-white/30 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold mb-2">
                📚 Subjects & Grades
              </h2>
              <p>Track your enrolled subjects and recent grades.</p>
            </motion.div>

            <motion.div
              className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:bg-white/30 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold mb-2">📆 Attendance</h2>
              <p>Monitor your daily class attendance records.</p>
            </motion.div>
          </div>
        )}

        {activeMenu === "Tuition Fees" && (
          <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">💰 Tuition Fees</h2>
            <p>
              Your current tuition balance and payment details will appear here.
            </p>
          </div>
        )}
      </motion.main>
    </div>
  );
}

export default Dashboard;
