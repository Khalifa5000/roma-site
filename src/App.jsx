import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/navBar/MainNavbar";
import './App.css';
import Home from "./components/pages/home/Home";
import Books from "./components/pages/books/Books";
import NewProducts from "./components/pages/newProducts/NewProducts";
import Notes from "./components/pages/notes/Notes";
import Reviews from "./components/pages/reviews/Reviews";

function App() {


  return (
    <>
      <MainNavbar />

      <main style={{ paddingTop: "78px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/new" element={<NewProducts />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </>
  )
}

export default App
