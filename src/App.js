import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/A6/hello-world";
import Tuiter from "./tuiter/explore";
import Home from "./tuiter/home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
<Routes>
   <Route index element={<Labs/>}/>
   <Route path="/hello" element={<HelloWorld/>}/>
   <Route path="/tuiter/explore" element={<Tuiter/>}/>

   <Route path="/tuiter/home" element={<Home/>}/>
</Routes>
    </BrowserRouter>
  );
}

export default App;
