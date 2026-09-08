import { Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
    return (
        <>
            <SmoothScroll />

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