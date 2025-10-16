import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import Dashboard from "./pages/Dashboard"; // ✅ Import this

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ New route */}
    </Routes>
  );
}

export default App;
