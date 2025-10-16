import { useNavigate } from "react-router-dom";
import "./Login.css"; // Reuse the animated background
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      document.getElementById("confirmPassword") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store in localStorage (hardcoded storage simulation)
    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
    accounts.push({ username, email, password });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Show success message for 2 seconds
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/"); // back to login
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-animated font-sans overflow-hidden">
      {/* Main Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-lg p-10 border border-white/40 transition-all duration-500 hover:shadow-blue-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-blue-700">
              New Student Application Portal
            </h1>
            <p className="text-gray-600 mt-2 text-sm">
              Access with your active Username and Email account
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Portal Logo"
            className="w-16 h-16 ml-4 drop-shadow-md -mt-5"
          />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Student Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@student.edu"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </button>
        </p>
      </div>
      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
          Account Created Successfully!
        </div>
      )}
    </div>
  );
}

export default SignUp;
