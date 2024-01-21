import './App.css'
import Header from "./components/header.tsx"
import Home from "./components/home.tsx"
import About from "./components/about.tsx"
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <HashRouter basename="/portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </> 
  )
}

export default App
