import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Test from './components/test'

function App() {
  return (
    <>


      <div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>

      {/* <div>
        <Routes>

        </Routes>
      </div> */}
    </>
  );
}

export default App;
