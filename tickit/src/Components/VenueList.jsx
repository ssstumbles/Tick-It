import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import venueArray from "../../venue.json"

const VenueList = () => { 

    const [venues, setVenues] = useState();

    useEffect(() => {
        // const getVenue = async() => {
        //     const response = await axios.get(`url/venues`)
        //     setVenue(response.data.venues)
        // }
        // console.log('got venues')
        // getVenue()
        setVenues(venueArray)
    }, [])

    if (!venues) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return (
        <div className='route-body'>
             <h1>Venues</h1> 
             <div className="venue-list">
                {venues.map((ven) => (
                    <NavLink to={ven.name} key={ven.id} className="venue-link">
                        <div>{ven.name}</div>
                        <img src={ven.image_url}/>
                    </NavLink>
                ))}
             </div>
        </div>
    )
}

export default VenueList