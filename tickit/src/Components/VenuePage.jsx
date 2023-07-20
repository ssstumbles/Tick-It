import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
// import venueArray from "../../venue.json"
import axios from 'axios'

const VenuePage = () => {
    const [ venue, setVenue ] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getVenue = async() => {
            const response = await axios.get(`http://127.0.0.1:8000/venues/`)
            setVenue(response.data.find((ven) => ven.name === id ))
        }
        console.log('got venue')
        getVenue()
        
    }, [])

    if (!venue) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return(
        <div>
        <div className='route-body'>
            <NavLink to="/venues" className="back-link">Back</NavLink>
            <div>{venue.name}</div>
            <div>{venue.venue_description}</div>
        </div>
        <div>
        {venue.events.map((eve) => (
            <NavLink to={`/events/${eve.name}`} key={eve.id} className="event-link">
                <div>{eve.name}</div>
                <img src={eve.image_url} height="200px" width="200px" />
                <div>{eve.date} | {eve.time}</div>
                <div>{eve.city}, {eve.state}</div>
                <div>{eve.event_description}</div>
                <div>Ticket Price: ${eve.ticket_price}</div>
            </NavLink>
        ))}   
        </div>
        </div>
    )
}
    
export default VenuePage