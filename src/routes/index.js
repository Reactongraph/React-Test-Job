import React from "react";
import Login from "../container/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "../container/Signup";
import NotFound from "../container/NotFound";
import Dashboard from "../container/Dashboard";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
