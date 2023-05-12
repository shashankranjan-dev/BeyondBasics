import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  RegisterPage,
  CoursesPage,
  CommunityPage,
  SingleCartPage,
  PaymentPage,
} from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/course" element={<CoursesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/single" element={<SingleCartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
