
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Routing/Home';
import Student from './Routing/Student';
import Contact from './Routing/Contact';

function App() {
  return (
    <div classNameNameName="App">
     <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/student">Student</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/contact" > Contact</Link>
           
         
        </li>
        
      </ul>

    </div>
  </div>
</nav>
      <Routes>
      
        <Route path='/home' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
