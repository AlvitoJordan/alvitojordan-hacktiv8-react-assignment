import { Route, Routes, Navigate, useLocation} from "react-router-dom";
import "./App.css";
import Sidebar from "./component/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname === '/not-found' ? null : <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/interests" element={<Interests />}></Route>
          <Route path="/awards" element={<Awards />}></Route>
          <Route path="/not-found" element={<NotFound/>}></Route>
          <Route path='*' element={ <Navigate to="/not-found" replace />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
