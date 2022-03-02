import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </header>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>this is About</h2>
      <Link to="/">link to home</Link>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>this is Home</h2>
      <Link to="/about">link to about</Link>
    </div>
  );
}

export default App;