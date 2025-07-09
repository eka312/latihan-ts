import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projek from './pages/Projek';
import ProtectedRoute from './komponen/ProtectedRoute';
import { useEffect, useState } from 'react';
// import { projekList as defaultProjekList } from "./data/ProjekList";
import type { ProjekType } from './data/ProjekList';


function App() {
  const [projekList,setProjekList] = useState<ProjekType[]>(() => {
    const stored = localStorage.getItem("projekList");
    return stored ? JSON.parse(stored) : defaultProjekList;
  });

  useEffect(() => {
    localStorage.setItem("projekList", JSON.stringify(projekList));
  },[projekList]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Dashboard' element={<ProtectedRoute><Dashboard projekList={projekList} /></ProtectedRoute>} />
        <Route path='/Projek' element={<ProtectedRoute><Projek projekList={projekList} setProjekList={setProjekList} /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App