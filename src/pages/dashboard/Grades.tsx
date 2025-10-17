import {
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  BarChart3,
  Download,
} from "lucide-react";

const Grades: React.FC = () => {
  const courses = [
    {
      code: "CS101",
      title: "Introduction to Computer Science",
      instructor: "Prof. Maria Santos",
      currentGrade: 1.25,
      trend: "up",
      assignments: [
        { name: "Midterm Exam", grade: 1.5, weight: 30 },
        { name: "Programming Project", grade: 1.0, weight: 25 },
        { name: "Lab Exercises", grade: 1.25, weight: 20 },
        { name: "Final Exam", grade: null, weight: 25 },
      ],
      color: "from-blue-500/90 to-cyan-500/90",
    },
    {
      code: "IT202",
      title: "Web Development Fundamentals",
      instructor: "Engr. John Cruz",
      currentGrade: 1.75,
      trend: "up",
      assignments: [
        { name: "HTML/CSS Project", grade: 2.0, weight: 20 },
        { name: "JavaScript Assignment", grade: 1.5, weight: 25 },
        { name: "React Final Project", grade: 1.25, weight: 35 },
        { name: "Quizzes", grade: 2.25, weight: 20 },
      ],
      color: "from-purple-500/90 to-pink-500/90",
    },
    {
      code: "MATH105",
      title: "Discrete Mathematics",
      instructor: "Dr. Anne Dela Peña",
      currentGrade: 1.5,
      trend: "stable",
      assignments: [
        { name: "Problem Set 1", grade: 1.75, weight: 15 },
        { name: "Problem Set 2", grade: 1.25, weight: 15 },
        { name: "Midterm Exam", grade: 1.25, weight: 30 },
        { name: "Final Exam", grade: null, weight: 40 },
      ],
      color: "from-emerald-500/90 to-teal-500/90",
    },
    {
      code: "PHYS201",
      title: "Physics for Engineers",
      instructor: "Dr. Robert Lim",
      currentGrade: 2.25,
      trend: "down",
      assignments: [
        { name: "Lab Report 1", grade: 2.5, weight: 15 },
        { name: "Lab Report 2", grade: 2.0, weight: 15 },
        { name: "Midterm Exam", grade: 2.25, weight: 30 },
        { name: "Final Project", grade: null, weight: 40 },
      ],
      color: "from-orange-500/90 to-red-500/90",
    },
    {
      code: "ENG101",
      title: "Technical Writing",
      instructor: "Prof. Sarah Johnson",
      currentGrade: 1.0,
      trend: "up",
      assignments: [
        { name: "Research Paper", grade: 1.25, weight: 30 },
        { name: "Technical Report", grade: 1.0, weight: 35 },
        { name: "Documentation", grade: 1.25, weight: 20 },
        { name: "Peer Reviews", grade: 1.0, weight: 15 },
      ],
      color: "from-amber-500/90 to-yellow-500/90",
    },
    {
      code: "DATA301",
      title: "Data Structures & Algorithms",
      instructor: "Dr. Michael Chen",
      currentGrade: 1.75,
      trend: "stable",
      assignments: [
        { name: "Linked List Implementation", grade: 2.0, weight: 20 },
        { name: "Sorting Algorithms", grade: 1.25, weight: 25 },
        { name: "Tree Structures", grade: 2.0, weight: 25 },
        { name: "Final Project", grade: null, weight: 30 },
      ],
      color: "from-indigo-500/90 to-violet-500/90",
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-5 h-5 text-green-400" />;
      case "down":
        return <TrendingDown className="w-5 h-5 text-red-400" />;
      default:
        return <div className="w-5 h-5 text-blue-400">→</div>;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade <= 1.25) return "text-green-400";
    if (grade <= 1.75) return "text-yellow-400";
    if (grade <= 2.25) return "text-orange-400";
    if (grade <= 2.75) return "text-red-400";
    return "text-red-600";
  };

  const getGradeBackground = (grade: number) => {
    if (grade <= 1.25) return "bg-green-500/20 border-green-500/30";
    if (grade <= 1.75) return "bg-yellow-500/20 border-yellow-500/30";
    if (grade <= 2.25) return "bg-orange-500/20 border-orange-500/30";
    if (grade <= 2.75) return "bg-red-500/20 border-red-500/30";
    return "bg-red-600/20 border-red-600/30";
  };

  const getSimpleLetterGrade = (grade: number) => {
    if (grade <= 1.0) return "1.00";
    if (grade <= 1.25) return "1.25";
    if (grade <= 1.5) return "1.50";
    if (grade <= 1.75) return "1.75";
    if (grade <= 2.0) return "2.00";
    if (grade <= 2.25) return "2.25";
    if (grade <= 2.5) return "2.50";
    if (grade <= 2.75) return "2.75";
    if (grade <= 3.0) return "3.00";
    return "5.00";
  };

  const calculateGPA = () => {
    const total = courses.reduce((sum, course) => sum + course.currentGrade, 0);
    return (total / courses.length).toFixed(2);
  };

  const overallGPA = calculateGPA();
  const highestGrade = Math.min(
    ...courses.map((course) => course.currentGrade)
  ); // Lower is better
  const lowestGrade = Math.max(...courses.map((course) => course.currentGrade)); // Higher is worse

  // Convert grade to percentage for progress bars (inverse since lower is better)
  const gradeToPercentage = (grade: number) => {
    // Convert 1.0-3.0 scale to 100%-0% for visualization
    return Math.max(0, 100 - ((grade - 1.0) / 2.0) * 100);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 to-green-900/95 p-8 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent drop-shadow-sm">
            🧾 Grades & Performance
          </h2>
          <p className="text-green-200/80 mt-2">
            Track your academic progress (5.0 Point System)
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
          <Award className="w-5 h-5 text-green-300" />
          <span className="text-white font-medium">
            Semester GWA: {overallGPA}
          </span>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">{overallGPA}</div>
          <div className="text-green-200/80 text-sm">
            General Weighted Average
          </div>
        </div>
        <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">
            {getSimpleLetterGrade(parseFloat(overallGPA))}
          </div>
          <div className="text-blue-200/80 text-sm">Average Grade</div>
        </div>
        <div className="bg-amber-500/20 border border-amber-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">
            {highestGrade.toFixed(2)}
          </div>
          <div className="text-amber-200/80 text-sm">Best Grade</div>
        </div>
        <div className="bg-red-500/20 border border-red-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">
            {lowestGrade.toFixed(2)}
          </div>
          <div className="text-red-200/80 text-sm">Lowest Grade</div>
        </div>
      </div>

      {/* Grade Legend */}
      <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
        <h3 className="text-white font-semibold mb-3">Grading System</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-white/80">1.00-1.25 (Excellent)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-white/80">1.50-1.75 (Good)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-white/80">2.00-2.25 (Fair)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-white/80">2.50-3.00 (Passing)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-700 rounded"></div>
            <span className="text-white/80">5.00 (Failed)</span>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${course.color} p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 text-white border border-white/20 group`}
          >
            {/* Course Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="bg-white/20 px-3 py-1 rounded-full border border-white/30">
                <span className="text-sm font-bold text-white">
                  {course.code}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {getTrendIcon(course.trend)}
              </div>
            </div>

            {/* Course Title */}
            <h3 className="text-lg font-bold mb-2 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-white/80 text-sm mb-4">{course.instructor}</p>

            {/* Main Grade Display */}
            <div
              className={`text-center p-4 rounded-xl border ${getGradeBackground(
                course.currentGrade
              )} mb-4`}
            >
              <div className="text-3xl font-bold mb-1">
                <span className={getGradeColor(course.currentGrade)}>
                  {course.currentGrade.toFixed(2)}
                </span>
              </div>
              <div className="text-white/80 text-sm">
                {getSimpleLetterGrade(course.currentGrade)} • Current Grade
              </div>
            </div>

            {/* Assignment Breakdown */}
            <div className="space-y-3">
              {course.assignments.map((assignment, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-white/90 flex-1 truncate mr-2">
                    {assignment.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">
                      ({assignment.weight}%)
                    </span>
                    <span
                      className={`font-semibold ${
                        assignment.grade
                          ? getGradeColor(assignment.grade)
                          : "text-white/50"
                      }`}
                    >
                      {assignment.grade ? assignment.grade.toFixed(2) : "--"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary */}
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Performance Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">
              Grade Distribution
            </h4>
            <div className="space-y-2">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{course.code}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-white/20 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getGradeColor(
                          course.currentGrade
                        ).replace("text-", "bg-")}`}
                        style={{
                          width: `${gradeToPercentage(course.currentGrade)}%`,
                        }}
                      ></div>
                    </div>
                    <span
                      className={`text-sm font-semibold ${getGradeColor(
                        course.currentGrade
                      )}`}
                    >
                      {course.currentGrade.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Academic Standing</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                <Award className="w-6 h-6 text-green-400" />
                <div>
                  <div className="text-white font-semibold">Dean's Lister</div>
                  <div className="text-green-200/80 text-sm">
                    GWA below 1.75
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Target className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">
                    Academic Distinction
                  </div>
                  <div className="text-blue-200/80 text-sm">
                    No grade below 2.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-white/20">
        <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Transcript
        </button>
        <button className="bg-white text-green-900 hover:bg-green-100 border border-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
          Request Grade Review
        </button>
        <button className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
          View Academic Standing
        </button>
      </div>
    </div>
  );
};

export default Grades;
