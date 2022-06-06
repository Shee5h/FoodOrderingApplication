import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import AdminBoard from './components/AdminBoard';
import Login from './components/Login';
import Registration from './components/Registration';
import Test from './components/test'

function App() {
  return (
    <>


      <div>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/adminBoard" element={<AdminBoard />} />
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
