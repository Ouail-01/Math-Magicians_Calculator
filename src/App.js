import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quotes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
