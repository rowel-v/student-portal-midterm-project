import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Bell,
  BellOff,
  Shield,
  User,
  Palette,
  Globe,
  BookOpen,
  CreditCard,
  GraduationCap,
  Download,
  Trash2,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [showGrades, setShowGrades] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const settingsSections = [
    {
      title: "Appearance",
      icon: <Palette size={20} className="text-blue-400" />,
      settings: [
        {
          label: "Theme",
          description: "Choose between light and dark mode",
          control: (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white rounded-xl hover:scale-105 transition-all duration-300 font-medium hover:bg-blue-500/30"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          ),
        },
      ],
    },
    {
      title: "Academic Preferences",
      icon: <BookOpen size={20} className="text-green-400" />,
      settings: [
        {
          label: "Show Grades Publicly",
          description: "Allow others to view your grades",
          control: (
            <button
              onClick={() => setShowGrades(!showGrades)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                showGrades ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 ${
                  showGrades ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          ),
        },
        {
          label: "Auto-save Progress",
          description: "Automatically save your academic progress",
          control: (
            <button
              onClick={() => setAutoSave(!autoSave)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                autoSave ? "bg-blue-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 ${
                  autoSave ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          ),
        },
      ],
    },
    {
      title: "Notifications",
      icon: <Bell size={20} className="text-amber-400" />,
      settings: [
        {
          label: "Push Notifications",
          description: "Receive browser notifications for deadlines",
          control: (
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                notifications ? "bg-amber-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          ),
        },
        {
          label: "Email Notifications",
          description: "Receive email alerts for important updates",
          control: (
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                emailNotifications ? "bg-amber-500" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 ${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          ),
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: <Shield size={20} className="text-red-400" />,
      settings: [
        {
          label: "Two-factor authentication",
          description: "Add an extra layer of security to your account",
          control: (
            <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium hover:scale-105">
              Enable 2FA
            </button>
          ),
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">
            ⚙️ Settings
          </h1>
          <p className="text-blue-200/80 text-lg">
            Manage your academic preferences and account settings
          </p>
        </div>

        {/* Main Settings Grid */}
        <div className="grid gap-6 max-w-6xl mx-auto">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="px-6 py-4 border-b border-white/20 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl border border-white/20">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {section.settings.map((setting, index) => (
                    <motion.div
                      key={setting.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIndex * 0.1 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">
                          {setting.label}
                        </h3>
                        <p className="text-blue-200/70 text-sm">
                          {setting.description}
                        </p>
                      </div>
                      <div className="ml-4">{setting.control}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 text-left border border-white/20 rounded-2xl hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-3">
                <User
                  className="text-blue-400 group-hover:text-blue-300"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-white">Edit Profile</h3>
                  <p className="text-blue-200/70 text-sm">
                    Update personal information
                  </p>
                </div>
              </div>
            </button>

            <button className="p-4 text-left border border-white/20 rounded-2xl hover:border-green-400 hover:bg-green-500/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-3">
                <Download
                  className="text-green-400 group-hover:text-green-300"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-white">Export Data</h3>
                  <p className="text-blue-200/70 text-sm">
                    Download academic records
                  </p>
                </div>
              </div>
            </button>

            <button className="p-4 text-left border border-white/20 rounded-2xl hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-3">
                <GraduationCap
                  className="text-purple-400 group-hover:text-purple-300"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-white">Academic Plan</h3>
                  <p className="text-blue-200/70 text-sm">
                    View course roadmap
                  </p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 bg-red-500/10 backdrop-blur-lg border border-red-500/30 rounded-3xl p-6 max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-red-400 mb-2">
              ⚠️ Danger Zone
            </h2>
            <p className="text-red-300/80">
              These actions are irreversible. Please proceed with caution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-medium hover:scale-105">
              <Trash2 size={18} />
              Delete Account
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-medium hover:scale-105">
              <Download size={18} />
              Export All Data
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/30 transition-all duration-300 font-medium hover:scale-105">
              <Save size={18} />
              Reset Preferences
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Settings;
