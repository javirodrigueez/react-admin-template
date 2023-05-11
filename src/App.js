import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Flujo1 from './pages/Flujo1';
import Flujo2 from './pages/Flujo2';
import Flujo3 from './pages/Flujo3';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flujo1" element={<Flujo1 />} />
          <Route path="flujo2" element={<Flujo2 />} />
          <Route path="flujo3" element={<Flujo3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
