import {
  Clock,
  MapPin,
  BookOpen,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const Calendar: React.FC = () => {
  const todaySchedule = [
    {
      course: "IT202",
      title: "Web Development Lab",
      type: "class",
      time: "1:00 PM - 2:30 PM",
      duration: "90min",
      location: "Lab 205",
      color: "from-purple-500/90 to-pink-500/90",
      active: true,
    },
    {
      course: "CS101",
      title: "Introduction to Computer Science",
      type: "class",
      time: "9:00 AM - 10:30 AM",
      duration: "90min",
      location: "Room 301",
      color: "from-blue-500/90 to-cyan-500/90",
      active: false,
    },
    {
      course: "MATH105",
      title: "Discrete Mathematics",
      type: "class",
      time: "10:00 AM - 12:00 PM",
      duration: "120min",
      location: "Room 412",
      color: "from-emerald-500/90 to-teal-500/90",
      active: false,
    },
    {
      course: "PHYS201",
      title: "Physics for Engineers",
      type: "class",
      time: "2:00 PM - 3:30 PM",
      duration: "90min",
      location: "Science Bldg 104",
      color: "from-orange-500/90 to-red-500/90",
      active: false,
    },
    {
      course: "ENG101",
      title: "Technical Writing",
      type: "class",
      time: "10:00 AM - 11:30 AM",
      duration: "90min",
      location: "Humanities 208",
      color: "from-amber-500/90 to-yellow-500/90",
      active: false,
    },
    {
      course: "DATA301",
      title: "Data Structures & Algorithms",
      type: "class",
      time: "8:00 AM - 9:00 AM",
      duration: "60min",
      location: "Computer Lab 3",
      color: "from-indigo-500/90 to-violet-500/90",
      active: false,
    },
  ];

  const upcomingEvents = [
    {
      title: "Web Development Project Due",
      course: "IT202",
      type: "deadline",
      date: "Tomorrow, 11:59 PM",
      color: "from-purple-500/90 to-pink-500/90",
    },
    {
      title: "Discrete Math Problem Set",
      course: "MATH105",
      type: "assignment",
      date: "Jan 15, 9:00 AM",
      color: "from-emerald-500/90 to-teal-500/90",
    },
    {
      title: "Physics Midterm Exam",
      course: "PHYS201",
      type: "exam",
      date: "Jan 18, 10:00 AM",
      color: "from-orange-500/90 to-red-500/90",
    },
  ];

  const weekStats = [
    { count: 3, label: "Classes", color: "text-blue-400" },
    { count: 2, label: "Deadlines", color: "text-amber-400" },
    { count: 1, label: "Exams", color: "text-red-400" },
    { count: 1, label: "Meetings", color: "text-emerald-400" },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "class":
        return <BookOpen className="w-4 h-4" />;
      case "exam":
        return <AlertCircle className="w-4 h-4" />;
      case "deadline":
        return <Clock className="w-4 h-4" />;
      case "assignment":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Today's Schedule
          </h1>
          <p className="text-purple-200 text-lg">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule - Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Your Classes Today
                </h2>
                <div className="flex items-center gap-2 text-purple-300">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${
                      item.color
                    } rounded-2xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 ${
                      item.active ? "ring-2 ring-white/30 shadow-lg" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            {getEventIcon(item.type)}
                            <span className="text-white/90 text-sm font-semibold bg-white/20 px-2 py-1 rounded-full">
                              {item.course}
                            </span>
                          </div>
                          {item.active && (
                            <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full border border-green-500/30">
                              Live Now
                            </span>
                          )}
                        </div>

                        <h3 className="text-white font-bold text-lg mb-2">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.time}</span>
                            <span className="text-white/60">
                              ({item.duration})
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white p-2 rounded-xl transition-all duration-200 hover:scale-110">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${event.color} rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {getEventIcon(event.type)}
                      <span className="text-white/80 text-sm font-semibold">
                        {event.course}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {event.title}
                    </h3>
                    <p className="text-white/60 text-xs">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* This Week Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">This Week</h2>
              <div className="grid grid-cols-2 gap-4">
                {weekStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                      {stat.count}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  View Calendar
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  Add Event
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  Join Class
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  Submit Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/40 text-sm">
          <p>Stay organized and productive! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
