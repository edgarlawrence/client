import React from "react";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Search } from "./Pages/Search";
import Cart from "./Pages/Cart";
import Details from "./Pages/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
