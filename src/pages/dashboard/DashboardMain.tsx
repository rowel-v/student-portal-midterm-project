import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  CreditCard,
  Calendar,
  Award,
  Bell,
  TrendingUp,
} from "lucide-react";

interface Props {
  username: string;
}

const DashboardMain: React.FC<Props> = ({ username }) => {
  const stats = [
    {
      icon: BookOpen,
      label: "Enrolled Courses",
      value: "6",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      label: "Pending Assignments",
      value: "3",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: CreditCard,
      label: "Pending Payments",
      value: "2",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      label: "Current GPA",
      value: "1.45",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const upcomingItems = [
    {
      type: "assignment",
      course: "IT202",
      title: "Web Development Project",
      due: "Tomorrow",
    },
    { type: "class", course: "CS101", title: "Midterm Exam", due: "Jan 18" },
    {
      type: "payment",
      course: "Tuition",
      title: "Balance Payment",
      due: "Jan 25",
    },
  ];

  const recentActivity = [
    { action: "Submitted", item: "Math Problem Set", time: "2 hours ago" },
    {
      action: "Enrolled in",
      item: "DATA301 - Data Structures",
      time: "1 day ago",
    },
    { action: "Paid", item: "Library Fee", time: "2 days ago" },
  ];

  const getUpcomingIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <FileText className="w-4 h-4" />;
      case "class":
        return <BookOpen className="w-4 h-4" />;
      case "payment":
        return <CreditCard className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getUpcomingColor = (type: string) => {
    switch (type) {
      case "assignment":
        return "text-amber-400 bg-amber-500/20";
      case "class":
        return "text-blue-400 bg-blue-500/20";
      case "payment":
        return "text-emerald-400 bg-emerald-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 p-6 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {username}!
              </span>
            </h1>
            <p className="text-blue-200 mt-2">
              Here's your academic overview for today
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">Good Standing</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} p-4 rounded-2xl shadow-lg border border-white/20`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">{stat.label}</p>
                <p className="text-white text-2xl font-bold mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Dashboard Cards */}
        <motion.div
          className="lg:col-span-2 grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-blue-500/90 to-cyan-500/90 p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">📚 Courses</h2>
            </div>
            <p className="text-white/80 mb-4">
              View your enrolled subjects and academic progress
            </p>
            <div className="flex items-center justify-between text-white/60 text-sm">
              <span>6 active courses</span>
              <span>→</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/90 to-orange-500/90 p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">📝 Assignments</h2>
            </div>
            <p className="text-white/80 mb-4">
              Track upcoming and submitted tasks
            </p>
            <div className="flex items-center justify-between text-white/60 text-sm">
              <span>3 pending tasks</span>
              <span>→</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/90 to-teal-500/90 p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">💰 Payments</h2>
            </div>
            <p className="text-white/80 mb-4">
              Manage tuition fees and transactions
            </p>
            <div className="flex items-center justify-between text-white/60 text-sm">
              <span>2 pending payments</span>
              <span>→</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/90 to-pink-500/90 p-6 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">🗓️ Calendar</h2>
            </div>
            <p className="text-white/80 mb-4">
              View your schedule and deadlines
            </p>
            <div className="flex items-center justify-between text-white/60 text-sm">
              <span>4 events this week</span>
              <span>→</span>
            </div>
          </div>
        </motion.div>

        {/* Sidebar - Upcoming & Activity */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Upcoming Items */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-400" />
              Upcoming Items
            </h3>
            <div className="space-y-3">
              {upcomingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div
                    className={`p-2 rounded-lg ${getUpcomingColor(item.type)}`}
                  >
                    {getUpcomingIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">
                      {item.title}
                    </div>
                    <div className="text-white/60 text-xs">
                      {item.course} • Due {item.due}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-white text-sm">
                      <span className="text-white/80">{activity.action}</span>{" "}
                      <span className="font-semibold">{activity.item}</span>
                    </div>
                    <div className="text-white/60 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-5 border border-blue-500/30">
            <h3 className="text-lg font-bold text-white mb-3">This Week</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-blue-200 text-xs">Study Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-blue-200 text-xs">Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-blue-200 text-xs">Classes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-blue-200 text-xs">Deadlines</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardMain;
