import { Outlet } from "react-router-dom";
import About from "./about";

export function MainDiv(props) {
  return (
    <main id="main-div">
      <Outlet /> && <About/>
    </main>
  );
}
