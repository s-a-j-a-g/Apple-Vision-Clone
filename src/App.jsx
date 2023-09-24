import "./style.css";
import { useEffect } from "react";
import loco from "./utils/loco";
import animate from "./utils/animate";

const App = () => {
  useEffect(() => {
    loco();
    animate();
  }, []);

  return (
    <div id="main">
      <div id="page">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/medium_2x.mp4"
          muted
        ></video>
        <nav>
          <h3>Vision Pro</h3>
          <button>Notify me</button>
        </nav>
        <div id="page-bottom">
          <h3>Introduction</h3>
          <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png" />
        </div>
      </div>
      <div id="page1"></div>
    </div>
  );
};

export default App;
