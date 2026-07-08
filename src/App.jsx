import { Routes, Route } from "react-router-dom";

import Cursor from "./components/Cursor/Cursor";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {

  return (

    <>

      <Cursor />

      <Routes>

        {/* Homepage */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

        </Route>

        {/* Project Page */}

        <Route
          path="/projects/:slug"
          element={<Project />}
        />

      </Routes>

    </>

  );

}