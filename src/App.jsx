import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Signin" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
