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

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/DCT-project-app' element={<Home/>} />
          <Route path='/DCT-project-app/weed' element={<Weed/>} />
          <Route path='/DCT-project-app/egg' element={<Egg/>} />
          <Route path='/DCT-project-app/muscle' element={<Muscle/>} />
          <Route path='/DCT-project-app/sleep' element={<Sleep/>} />
          <Route path='/DCT-project-app/stock' element={<Stock/>} />
          <Route path='/DCT-project-app/tea' element={<Tea/>} />
          <Route path='/DCT-project-app/war' element={<War/>} />
          <Route path='/DCT-project-app/musq' element={<Musq/>} />
          <Route path='/DCT-project-app/festival' element={<Festival/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
