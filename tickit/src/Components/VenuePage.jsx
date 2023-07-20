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
        <div className='route-body'>
            <NavLink to="/venues" className="back-link">Back</NavLink>
            <div>{venue.name}</div>
        </div>
    )
}
    
export default VenuePage