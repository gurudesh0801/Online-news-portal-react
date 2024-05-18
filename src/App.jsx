import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import MainPage from "./Components/MainPage/MainPage";
import Signup from "./Components/SignUp/Signup";
import NewsPost from "./Components/NewsPost/NewsPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/postnews" element={<NewsPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
