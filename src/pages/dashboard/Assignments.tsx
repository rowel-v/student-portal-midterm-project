import {
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Assignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: "Programming Fundamentals Project",
      course: "CS101 - Intro to Computer Science",
      dueDate: "2024-01-15",
      dueTime: "11:59 PM",
      status: "submitted",
      points: 100,
      submittedDate: "2024-01-14",
      grade: 95,
      type: "project",
    },
    {
      id: 2,
      title: "Web Development Lab Exercise",
      course: "IT202 - Web Development Fundamentals",
      dueDate: "2024-01-18",
      dueTime: "11:59 PM",
      status: "pending",
      points: 50,
      type: "lab",
    },
    {
      id: 3,
      title: "Discrete Math Problem Set",
      course: "MATH105 - Discrete Mathematics",
      dueDate: "2024-01-12",
      dueTime: "9:00 AM",
      status: "overdue",
      points: 75,
      type: "homework",
    },
    {
      id: 4,
      title: "Physics Lab Report",
      course: "PHYS201 - Physics for Engineers",
      dueDate: "2024-01-20",
      dueTime: "5:00 PM",
      status: "pending",
      points: 85,
      type: "lab",
    },
    {
      id: 5,
      title: "Technical Writing Essay",
      course: "ENG101 - Technical Writing",
      dueDate: "2024-01-22",
      dueTime: "11:59 PM",
      status: "pending",
      points: 100,
      type: "essay",
    },
    {
      id: 6,
      title: "Data Structures Implementation",
      course: "DATA301 - Data Structures & Algorithms",
      dueDate: "2024-01-25",
      dueTime: "11:59 PM",
      status: "pending",
      points: 150,
      type: "project",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "text-green-500 bg-green-500/20";
      case "pending":
        return "text-blue-500 bg-blue-500/20";
      case "overdue":
        return "text-red-500 bg-red-500/20";
      default:
        return "text-gray-500 bg-gray-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "overdue":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "from-purple-500/90 to-pink-500/90";
      case "lab":
        return "from-blue-500/90 to-cyan-500/90";
      case "homework":
        return "from-emerald-500/90 to-teal-500/90";
      case "essay":
        return "from-amber-500/90 to-orange-500/90";
      default:
        return "from-gray-500/90 to-slate-500/90";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isDueSoon = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3 && diffDays >= 0;
  };

  const submittedCount = assignments.filter(
    (a) => a.status === "submitted"
  ).length;
  const pendingCount = assignments.filter((a) => a.status === "pending").length;
  const overdueCount = assignments.filter((a) => a.status === "overdue").length;

  return (
    <div className="bg-gradient-to-br from-slate-900/95 to-purple-900/95 p-8 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent drop-shadow-sm">
            📝 Assignments
          </h2>
          <p className="text-purple-200/80 mt-2">
            Manage and track your coursework
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-center bg-white/10 px-4 py-2 rounded-xl border border-white/20">
            <div className="text-2xl font-bold text-white">
              {assignments.length}
            </div>
            <div className="text-purple-200/80 text-sm">Total</div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">{submittedCount}</div>
          <div className="text-green-200/80 text-sm">Submitted</div>
        </div>
        <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">{pendingCount}</div>
          <div className="text-blue-200/80 text-sm">Pending</div>
        </div>
        <div className="bg-red-500/20 border border-red-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">{overdueCount}</div>
          <div className="text-red-200/80 text-sm">Overdue</div>
        </div>
        <div className="bg-purple-500/20 border border-purple-500/30 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-white">92%</div>
          <div className="text-purple-200/80 text-sm">Avg. Grade</div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className={`bg-gradient-to-r ${getTypeColor(
              assignment.type
            )} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105 group`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Left Section */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                      assignment.status
                    )}`}
                  >
                    {getStatusIcon(assignment.status)}
                    {assignment.status.charAt(0).toUpperCase() +
                      assignment.status.slice(1)}
                  </span>
                  {isDueSoon(assignment.dueDate) &&
                    assignment.status === "pending" && (
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-500/30">
                        Due Soon
                      </span>
                    )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90">
                  {assignment.title}
                </h3>

                <p className="text-white/80 text-sm mb-3">
                  {assignment.course} • {assignment.points} points
                </p>

                <div className="flex items-center gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(assignment.dueDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{assignment.dueTime}</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                {assignment.status === "submitted" && (
                  <div className="text-right">
                    <div className="text-sm text-white/70">Grade</div>
                    <div className="text-2xl font-bold text-white flex items-center gap-1">
                      {assignment.grade}%
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-xs text-white/60">
                      Submitted on {formatDate(assignment.submittedDate!)}
                    </div>
                  </div>
                )}

                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                    assignment.status === "submitted"
                      ? "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                      : assignment.status === "overdue"
                      ? "bg-red-500 text-white border border-red-400 hover:bg-red-600"
                      : "bg-white text-purple-900 border border-white hover:bg-purple-100"
                  }`}
                >
                  {assignment.status === "submitted"
                    ? "View Feedback"
                    : assignment.status === "overdue"
                    ? "Submit Late"
                    : "Submit Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/20">
        <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
          View All Submissions
        </button>
        <button className="bg-white text-purple-900 hover:bg-purple-100 border border-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
          Download All Materials
        </button>
        <button className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
          Calendar View
        </button>
      </div>
    </div>
  );
};

export default Assignments;
