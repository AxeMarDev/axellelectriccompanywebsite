
import './App.css'
import TopBar from "./components/topBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects.tsx";
import Index from "./pages";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";


function App() {

    return (
        <BrowserRouter>
            <TopBar/>
            <Routes >
                <Route path="/" element={<Index/>}/>
                <Route path="/API" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<Route path="/careers" element={<Careers/>}/>*/}
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
