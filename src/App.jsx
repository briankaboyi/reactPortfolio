import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Aside } from "./components/Aside";
import { MainDiv } from "./components/MainDiv";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import ErrorPage from "./components/error";

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
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
