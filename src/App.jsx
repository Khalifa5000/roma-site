import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import './App.css';
import Home from "./pages/home/Home";
import Books from "./pages/books/Books";
import NewProducts from "./pages/newProducts/NewProducts";
import Notes from "./pages/notes/Notes";
import Reviews from "./pages/reviews/Reviews";

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
