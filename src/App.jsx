import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/SideBar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";


const App = () => (
  <div className='app-container'>
    <Sidebar />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='/project' element={<Project/>}/>
      {/* Other routes */}
    </Routes>
  </div>
);

export default App;
