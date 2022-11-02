import CarDetailPage from "@/pages/CarDetail/CarDetailPage";
import CarListPage from "@/pages/Cars/CarsPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/detail" element={<CarDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
