import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import venueArray from "../../venue.json"

const VenueList = () => { 

    const [venues, setVenues] = useState();

    useEffect(() => {
        const getVenues = async() => {
            const response = await axios.get(`https://tick-it-backend-production.up.railway.app/venues/`)
            setVenues(response.data)
            console.log(response)
        }
        console.log('got venues')
        getVenues()
        // setVenues(venueArray)
    }, [])

    if (!venues) {
        return (
            <div className='vlroute-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return (
        <div className='vlroute-body'>
             <h1 className='list-header'>Venues</h1> 
             <div className="venue-list">
                {venues.map((ven) => (
                    <NavLink to={ven.name} key={ven.id} className="venue-link">
                        <div>{ven.name}</div>
                        <img src={ven.image_url} height='600px' width='600px' />
                    </NavLink>
                ))}
             </div>
        </div>
    )
}

export default VenueList