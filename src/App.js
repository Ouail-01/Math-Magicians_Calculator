/* eslint-disable */
import Calculator from './components/Calculator';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import NavBar from './components/Navbar';
import Quote from './components/Quotes';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Calculator' element={<Calculator />}/>
          <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App