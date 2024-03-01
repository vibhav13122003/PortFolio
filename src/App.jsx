import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/SideBar";
import Contact from "./pages/Contact";

const App = () => (
  
  <div className='app-container'>
    <Sidebar />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      {/* Other routes */}
    </Routes>
  </div>
);

export default App;
