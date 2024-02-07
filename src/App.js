import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Brush from "./pages/makeupBrush";
import MakeupLooks from "./pages/makeLooks";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/discount" element={<Brush />} />
          <Route path="/makeup" element={<MakeupLooks />} />
        </Routes>
      </Router>
    </div>
  );
}
