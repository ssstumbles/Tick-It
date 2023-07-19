import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom";
import eventsArray from "../../events.json"

const EventPage = () => {

    const [event, setEvent] = useState();
    let { id } = useParams()

    useEffect(() => {
        // const getEvents = async() => {
        //     const response = await axios.get(`url/events`)
        //     setEvents(response.data.events)
        // }
        // console.log('got events')
        // getEvents()
        setEvent(eventsArray.find((eve) => eve.name === id ))
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
        </div>
       
    )
}

export default EventPage