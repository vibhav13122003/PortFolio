import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/SideBar";

const App = () => (
  <div className='app-container'>
    <Sidebar/>
    <Routes>
      <Route index path='/' element={<Home />} />
      {/* Other routes */}
    </Routes>
  </div>
);

export default App;
