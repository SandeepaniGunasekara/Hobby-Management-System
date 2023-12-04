import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  return loggedIn ? children : <Navigate to="/login" />;
}
