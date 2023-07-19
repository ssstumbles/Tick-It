import { Route, Routes } from 'react-router-dom'
import EventsList from "./EventsList"
import VenueList from "./VenueList"
import Home from "./Home"
import VenuePage from "./VenuePage"
import EventPage from './EventPage'

const Main = () => {
    return (
     
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/events' element={<EventsList />} />
                <Route exact path='/venues' element={<VenueList />} />
                <Route exact path='/venues/:id' element={<VenuePage />} />
                <Route exact path='/events/:id' element={<EventPage />} />
            </Routes>
      
    )
}

export default Main