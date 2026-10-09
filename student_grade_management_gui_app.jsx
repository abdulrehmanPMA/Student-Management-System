export default function StudentGradeManagementSystem() {
  const students = [
    {
      name: "Ali Raza",
      roll: "2025-101",
      s1: 95,
      s2: 92,
      s3: 90,
      percentage: 92.33,
      grade: "A+",
    },
    {
      name: "Sara Khan",
      roll: "2025-102",
      s1: 89,
      s2: 85,
      s3: 92,
      percentage: 88.67,
      grade: "A",
    },
    {
      name: "Hamza Ali",
      roll: "2025-103",
      s1: 75,
      s2: 77,
      s3: 77,
      percentage: 76.33,
      grade: "B",
    },
  ];

  const getGradeColor = (grade) => {
    switch (grade) {
      case "A+":
        return "text-green-400";
      case "A":
        return "text-blue-400";
      case "B":
        return "text-yellow-400";
      case "C":
        return "text-orange-400";
      default:
        return "text-red-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">
          <h1 className="text-2xl font-bold mb-8 text-cyan-400">
            Student Grade System
          </h1>

          <div className="space-y-4">
            {[
              "Dashboard",
              "Add Student",
              "Display Students",
              "Search Student",
              "Sort Students",
              "Statistics",
              "Update Marks",
              "About",
            ].map((item) => (
              <button
                key={item}
                className="w-full text-left bg-zinc-800 hover:bg-cyan-600 transition-all duration-300 p-4 rounded-2xl"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-700 to-blue-900 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-5xl font-bold mb-3">
              STUDENT GRADE MANAGEMENT SYSTEM
            </h2>
            <p className="text-zinc-200 text-lg">
              Professional GUI Dashboard for Student Performance Analysis
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-5">
            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h3 className="text-zinc-400 text-sm mb-3">TOTAL STUDENTS</h3>
              <p className="text-4xl font-bold text-cyan-400">12</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h3 className="text-zinc-400 text-sm mb-3">CLASS AVERAGE</h3>
              <p className="text-4xl font-bold text-green-400">76.42%</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h3 className="text-zinc-400 text-sm mb-3">TOPPER</h3>
              <p className="text-2xl font-bold text-yellow-400">Ali Raza</p>
              <p className="text-lg text-zinc-300">92.33%</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
              <h3 className="text-zinc-400 text-sm mb-3">PASS RATIO</h3>
              <p className="text-4xl font-bold text-purple-400">91%</p>
            </div>
          </div>

          {/* Add Student Form */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-green-400">
              Add New Student
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <input
                placeholder="Full Name"
                className="bg-zinc-800 p-4 rounded-2xl outline-none"
              />
              <input
                placeholder="Roll Number"
                className="bg-zinc-800 p-4 rounded-2xl outline-none"
              />
              <input
                placeholder="Subject 1 Marks"
                className="bg-zinc-800 p-4 rounded-2xl outline-none"
              />
              <input
                placeholder="Subject 2 Marks"
                className="bg-zinc-800 p-4 rounded-2xl outline-none"
              />
              <input
                placeholder="Subject 3 Marks"
                className="bg-zinc-800 p-4 rounded-2xl outline-none"
              />
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition-all">
                Add Student
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-2xl font-semibold transition-all">
                Clear
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-semibold transition-all">
                Cancel
              </button>
            </div>
          </div>

          {/* Student Records Table */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-orange-400">
                Student Records
              </h3>

              <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-2xl">
                Refresh
              </button>
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-800 text-left">
                  <th className="p-4">Roll No</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Subject 1</th>
                  <th className="p-4">Subject 2</th>
                  <th className="p-4">Subject 3</th>
                  <th className="p-4">Percentage</th>
                  <th className="p-4">Grade</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-800 hover:bg-zinc-800 transition-all"
                  >
                    <td className="p-4">{student.roll}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.s1}</td>
                    <td className="p-4">{student.s2}</td>
                    <td className="p-4">{student.s3}</td>
                    <td className="p-4">{student.percentage}%</td>
                    <td
                      className={`p-4 font-bold ${getGradeColor(
                        student.grade
                      )}`}
                    >
                      {student.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-3xl font-bold mb-6 text-pink-400">
                Class Statistics
              </h3>

              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span>Total Students</span>
                  <span>12</span>
                </div>

                <div className="flex justify-between">
                  <span>Highest Percentage</span>
                  <span>92.33%</span>
                </div>

                <div className="flex justify-between">
                  <span>Lowest Percentage</span>
                  <span>47.67%</span>
                </div>

                <div className="flex justify-between">
                  <span>Pass Percentage</span>
                  <span>91%</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">
                Search Student
              </h3>

              <div className="flex gap-4 mb-6">
                <input
                  placeholder="Enter Roll Number"
                  className="flex-1 bg-zinc-800 p-4 rounded-2xl outline-none"
                />

                <button className="bg-cyan-600 hover:bg-cyan-700 px-6 rounded-2xl">
                  Search
                </button>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-6 space-y-3">
                <p>Name: Hamza Ali</p>
                <p>Percentage: 76.33%</p>
                <p className="text-yellow-400 font-bold">Grade: B</p>
                <p>Linear Comparisons: 3</p>
                <p>Binary Comparisons: 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
