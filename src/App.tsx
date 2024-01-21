import './App.css'
import Header from "./components/header.tsx"
import Home from "./components/home.tsx"
import About from "./components/about.tsx"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </> 
  )
}

export default App
