import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🧩 Static account for testing
  // const staticAccount = {
  //   username: "UA202200305ROWEL",
  //   password: "12345678",
  // };

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedAccounts = JSON.parse(localStorage.getItem("accounts") || "[]");
    const user = storedAccounts.find(
      (acc: any) => acc.username === email || acc.email === email
    );

    if (!user) {
      alert("Account not found. Please sign up first.");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    // Show success dialog for 2 seconds
    localStorage.setItem("loggedUser", JSON.stringify(user));
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center bg-animated font-sans overflow-hidden"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-md p-10 border border-white/40 transition-all duration-500 hover:shadow-blue-200">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Portal Logo"
            className="mx-auto w-16 h-16 mb-3 drop-shadow-md"
          />
          <h1 className="text-3xl font-bold text-blue-700">
            Online Student Portal
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Access and navigate with your active{" "}
            <span className="block">Student ID No. or Username</span>
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username / Student ID No.
            </label>
            <input
              type="text"
              placeholder="UA202200305ROWEL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password and Sign Up Links */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Forgot your password?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Reset here
          </a>
        </p>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </button>
        </p>
      </div>

      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
          ✅ Login Successful!
        </div>
      )}
    </motion.div>
  );
}

export default Login;
