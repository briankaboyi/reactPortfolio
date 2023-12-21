import { Outlet } from "react-router-dom";

export function MainDiv(props) {
  return (
    <main id="main-div">
      <Outlet />
    </main>
  );
}
