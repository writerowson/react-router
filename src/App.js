import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Friend from "./Components/Friend/Friend";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/friend" element={<Friend></Friend>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound></NotFound>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
