import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projek from './pages/Projek';
import ProtectedRoute from './komponen/ProtectedRoute';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/Projek' element={<ProtectedRoute><Projek /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App