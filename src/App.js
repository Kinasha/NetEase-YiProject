import './App.css';
import { Routes, Route } from 'react-router-dom';
import Content from './pages/content/content';
import Home from './pages/home/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Content" element={<Content />}></Route>
    </Routes>
  );
}

export default App;
