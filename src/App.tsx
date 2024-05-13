
import './App.css'
import TopBar from "./components/topBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<p>hello</p>}/>
                <Route path="/projects" element={<p>clients</p>}/>
                <Route path="/about" element={<p>about</p>}/>
                <Route path="/contact" element={<p>contact</p>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
