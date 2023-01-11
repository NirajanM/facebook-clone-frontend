import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/*" element={<Login />} />

      </Routes>
    </Router>
  )
}

export default App
