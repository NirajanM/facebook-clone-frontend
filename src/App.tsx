import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Homepage from './pages/Homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
