import { Route, Routes } from 'react-router-dom'
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Home from "./Home"

const Main = () => {
    return (
     
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
      
    )
}

export default Main