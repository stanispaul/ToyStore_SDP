import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRoutes from "./Routers/AdminRoutes";





function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
