import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Front } from "./pages/Front";
import { Home } from "./pages/Home";
import { Js } from "./pages/Js";
import { React } from "./pages/React";
import { CPage } from "./pages/CPage";
import { Python } from "./pages/Python";
import { routes } from "./routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.front} element={<Front />} />
        <Route path={routes.js} element={<Js />} />
        <Route path={routes.react} element={<React />} />
        <Route path={routes.c} element={<CPage />} />
        <Route path={routes.python} element={<Python />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
