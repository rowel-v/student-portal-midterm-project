import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Schedule", path: "/schedule", icon: "🗓️" },
    { name: "Subjects", path: "/subjects", icon: "📚" },
    { name: "Grades", path: "/grades", icon: "🧾" },
    { name: "Attendance", path: "/attendance", icon: "📆" },
    { name: "Tuition Fees", path: "/tuition", icon: "💰" },
    { name: "Payment History", path: "/payments", icon: "💳" },
    { name: "Messages", path: "/messages", icon: "✉️" },
    { name: "Documents", path: "/documents", icon: "📂" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="h-screen w-64 bg-blue-700 text-white flex flex-col py-6 px-4 fixed">
      <h2 className="text-2xl font-bold mb-8 text-center">Student Portal</h2>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-blue-500" : "hover:bg-blue-600"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
