import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./page";
import AddItemPage from "./components/AddItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/components/add-item" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
