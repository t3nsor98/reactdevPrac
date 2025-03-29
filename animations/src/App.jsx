import "./App.css";
import ScrollVelocity from "./components/ScrollVelocity";
import SplashCursor from "./components/SplashCursor";
import Squares from "./components/Squares";

{
  /* <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      /> */
}

function App() {
  const velocity = 100;
  return (
    <>
      <SplashCursor />
      <ScrollVelocity
        texts={["Digbijaya Lenka", "Full Stack Developer"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}

export default App;
