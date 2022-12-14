import logo from "./logo.svg";
import "./App.css";
import Texteditor from "./component/Texteditor";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
