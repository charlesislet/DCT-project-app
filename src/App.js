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
          <Route exact path='/DCT-project-app' element={<Home/>} />
          <Route exact path='/weed' element={<Weed/>} />
          <Route exact path='/egg' element={<Egg/>} />
          <Route exact path='/DCT-project-app/muscle' element={<Muscle/>} />
          <Route exact path='/DCT-project-app/sleep' element={<Sleep/>} />
          <Route exact path='/DCT-project-app/stock' element={<Stock/>} />
          <Route exact path='/DCT-project-app/tea' element={<Tea/>} />
          <Route exact path='/DCT-project-app/war' element={<War/>} />
          <Route exact path='/DCT-project-app/musq' element={<Musq/>} />
          <Route exact path='/DCT-project-app/festival' element={<Festival/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
