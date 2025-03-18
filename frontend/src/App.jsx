import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Navbar from "./components/Navbar";
import Appointments from "./pages/Appointments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
