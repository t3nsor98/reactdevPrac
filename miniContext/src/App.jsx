import "./App.css";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold text-center mt-10 text-white bg-green-500">
        React Context API Example
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
