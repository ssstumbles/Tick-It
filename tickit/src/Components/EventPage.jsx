import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
// import eventsArray from "../../events_arr.json"
import axios from 'axios'

const EventPage = () => {

    const [event, setEvent] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getEvents = async() => {
            const response = await axios.get(`http://127.0.0.1:8000/events`)
            setEvent(response.data.find((eve) => eve.name === id ))
        }
        console.log('got events')
        getEvents()
    }, [id])

    if (!event) {
        return (
            <div className='route-body'>
                <div className="loading">Loading...</div>
            </div>
        )
    }

    return(
        <div className='route-body'>
            <NavLink to="/events" className="back-link">Back</NavLink>
            <div>{event.name}</div>
            <img src={event.image_url}/>
        </div>
       
    )
}

export default EventPage