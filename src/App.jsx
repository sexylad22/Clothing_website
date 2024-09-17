import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ReviewPage from "./pages/ReviewPage";
import ClothingPage from "./pages/ClothingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/clothing" element={<ClothingPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
