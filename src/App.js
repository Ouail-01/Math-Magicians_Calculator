/* eslint-disable */
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
