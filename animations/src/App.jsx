import "./App.css";
import ScrollVelocity from "./components/ScrollVelocity";

function App() {
  return (
    <>
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}

export default App;
