import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import Dashboard from "./pages/Dasboard";
import AddUser from "./pages/AddUser";
import AddPost from "./pages/AddPost";
import PrivateRoute from "./Components/PrivateRoute";
import { useSelector } from "react-redux";
import NotFoundPage from "./Components/NotFounPage";
import ProfilePrivate from "./Components/PrivateRouteProfile";

function App() {
  const user = useSelector((state) => state.AuthReducer);
  console.log(user);
  return (
    <BrowserRouter>
      {user.connect && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Profile"
          element={
            <ProfilePrivate>
              <Profile />
            </ProfilePrivate>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
