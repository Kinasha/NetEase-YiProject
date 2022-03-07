import welcomePic from '$images/welcome.png';
import RButton from '../../components/button/button';
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
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeHeadr />
        <img src={welcomePic} alt="pic" />
        <RButton text="立即开启" href="/Content" />
      </header>
    </div>
  );
}

export default Home;
