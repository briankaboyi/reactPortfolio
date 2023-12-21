import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Aside } from "./components/Aside";
import { MainDiv } from "./components/MainDiv";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";

function Layout() {
  return (
    <div id="container">
      <Aside />
      <MainDiv />
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Skills />} />
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
