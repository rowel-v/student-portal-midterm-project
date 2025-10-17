import { BookOpen, User, Clock, MapPin, Users } from "lucide-react";

const Courses: React.FC = () => {
  const sampleCourses = [
    {
      code: "CS101",
      title: "Introduction to Computer Science",
      instructor: "Prof. Maria Santos",
      schedule: "Mon & Wed - 9:00 AM to 10:30 AM",
      room: "Room 301",
      students: 45,
      progress: 75,
      color: "from-blue-500/90 to-cyan-500/90",
    },
    {
      code: "IT202",
      title: "Web Development Fundamentals",
      instructor: "Engr. John Cruz",
      schedule: "Tue & Thu - 1:00 PM to 2:30 PM",
      room: "Lab 205",
      students: 32,
      progress: 60,
      color: "from-purple-500/90 to-pink-500/90",
    },
    {
      code: "MATH105",
      title: "Discrete Mathematics",
      instructor: "Dr. Anne Dela Peña",
      schedule: "Fri - 10:00 AM to 12:00 PM",
      room: "Room 412",
      students: 28,
      progress: 85,
      color: "from-emerald-500/90 to-teal-500/90",
    },
    {
      code: "PHYS201",
      title: "Physics for Engineers",
      instructor: "Dr. Robert Lim",
      schedule: "Mon & Wed - 2:00 PM to 3:30 PM",
      room: "Science Bldg 104",
      students: 38,
      progress: 45,
      color: "from-orange-500/90 to-red-500/90",
    },
    {
      code: "ENG101",
      title: "Technical Writing",
      instructor: "Prof. Sarah Johnson",
      schedule: "Tue & Thu - 10:00 AM to 11:30 AM",
      room: "Humanities 208",
      students: 25,
      progress: 90,
      color: "from-amber-500/90 to-yellow-500/90",
    },
    {
      code: "DATA301",
      title: "Data Structures & Algorithms",
      instructor: "Dr. Michael Chen",
      schedule: "Mon, Wed, Fri - 8:00 AM to 9:00 AM",
      room: "Computer Lab 3",
      students: 35,
      progress: 55,
      color: "from-indigo-500/90 to-violet-500/90",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 p-8 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-sm">
            Enrolled Courses
          </h2>
          <p className="text-blue-200/80 mt-2">
            6 active courses this semester
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
          <Users className="w-5 h-5 text-blue-300" />
          <span className="text-white font-medium">Total: 203 students</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCourses.map((course, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${course.color} p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 text-white border border-white/20 group hover:shadow-2xl hover:shadow-blue-500/20`}
          >
            {/* Header with Code and Progress */}
            <div className="flex justify-between items-start mb-4">
              <div className="bg-white/20 px-3 py-1 rounded-full border border-white/30">
                <span className="text-sm font-bold text-white">
                  {course.code}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/80 mb-1">Progress</div>
                <div className="text-lg font-bold">{course.progress}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mb-6">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            {/* Course Title */}
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg border border-white/30">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold leading-tight flex-1">
                {course.title}
              </h3>
            </div>

            {/* Course Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-white/80" />
                <span className="text-white/90">{course.instructor}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-white/80" />
                <span className="text-white/90">{course.schedule}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-white/80" />
                <span className="text-white/90">{course.room}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Users className="w-4 h-4 text-white/80" />
                <span className="text-white/90">
                  {course.students} students
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full mt-6 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95">
              View Course
            </button>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/20">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">6</div>
          <div className="text-blue-200/80 text-sm">Active Courses</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">24</div>
          <div className="text-blue-200/80 text-sm">Total Assignments</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">8</div>
          <div className="text-blue-200/80 text-sm">Upcoming Exams</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">68%</div>
          <div className="text-blue-200/80 text-sm">Average Progress</div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
