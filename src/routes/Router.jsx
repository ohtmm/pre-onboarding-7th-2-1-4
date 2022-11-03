import CarDetailPage from "@/pages/CarDetail/CarDetailPage";
import CarsPage from "@/pages/Cars/CarsPage";
import NotFound from "@/pages/NotFound";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="/detail/:id" element={<CarDetailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
