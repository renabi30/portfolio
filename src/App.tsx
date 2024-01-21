import './App.css'
import Header from "./components/header.tsx"
import Home from "./components/home.tsx"
import About from "./components/about.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
