import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Page/Home";
import Weed from "./Page/Weed";
import Egg from "./Page/Egg";
import Muscle from "./Page/Muscle";
import Sleep from "./Page/Sleep";
import Stock from "./Page/Stock";
import Tea from "./Page/Tea";
import War from "./Page/War";
import Musq from "./Page/Musq";
import Festival from "./Page/Festival";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='weed' element={<Weed/>} />
          <Route path='egg' element={<Egg/>} />
          <Route path='muscle' element={<Muscle/>} />
          <Route path='sleep' element={<Sleep/>} />
          <Route path='stock' element={<Stock/>} />
          <Route path='tea' element={<Tea/>} />
          <Route path='war' element={<War/>} />
          <Route path='musq' element={<Musq/>} />
          <Route path='festival' element={<Festival/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
