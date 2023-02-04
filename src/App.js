import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Events from './page/Events';
import {Routes, Route} from "react-router-dom"
import Movies from './page/Movies';
import User_Profile from './page/User_Profile';
import Contact from './page/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>  
       <Route path="/movies" element={<Movies/>}/>  
       <Route path="/events" element={<Events/>}/>  
       <Route path="/user_profile" element={<User_Profile/>}/>  
       <Route path="/contact" element={<Contact/>}/>  
       {/* <Route path="/movies" element={<Movies/>}/>   */}
      </Routes>
    </div>
  );
}

export default App;
