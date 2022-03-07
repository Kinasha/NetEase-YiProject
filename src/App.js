import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import welcomePic from '$images/welcome.png';
import { Button } from 'antd';
function WelcomeHeadr() {
  return (
    <div>
      <div>anniu</div>
      <h2>这是你的愿望清单</h2>
      <h2>将每个期待播种于此</h2>
      <h2>日复一日地灌溉</h2>
      <h2>惊喜终会在某天</h2>
      <h2>如约而至</h2>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeHeadr />
        <img src={welcomePic} alt="pic" />
        <Button
          type="primary"
          shape="round"
          style={{
            backgroundColor: '#FF3A3A',
            width: '200px',
            height: '48px',
            fontSize: '18px',
          }}
        >
          立即开启
        </Button>
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
