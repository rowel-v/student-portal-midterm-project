import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import DashboardMain from "./pages/dashboard"; // ✅ Import this

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardMain />} />{" "}
      {/* ✅ New route */}
    </Routes>
  );
}

export default App;
