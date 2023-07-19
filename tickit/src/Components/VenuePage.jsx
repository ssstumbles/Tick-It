import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
import venueArray from "../../venue.json"

const VenuePage = () => {
    const [venue, setVenue] = useState();
    let { id } = useParams()

    useEffect(() => {
        // const getEvents = async() => {
        //     const response = await axios.get(`url/events`)
        //     setEvents(response.data.events)
        // }
        // console.log('got events')
        // getEvents()
        setVenue(venueArray.find((ven) => ven.name === id ))
    }, [id])

    if (!venue) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>;
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