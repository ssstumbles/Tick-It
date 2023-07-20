import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminUpdate = ({id, name, date, time, ticket_price, city, state, image_url}) => {

    const initialState = {
        id: id,
        name: name,
        date: date,
        time: time,
        ticket_price: ticket_price,
        city: city,
        state: state,
        image_url: image_url,
    }

    const [updateState, setUpdateState] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const { setAxiosAction } = useContext(AxiosContext)


    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        console.log(id)
        try {
            await axios.put(
              `http://127.0.0.1:8000/events/${id}`,
              { city: updateState.fieldContent}
            );

            console.log(updateState.field)

            setEditMode(false)
            setUpdateState(initialState)
            setAxiosAction(true)

        } catch (error) {
            console.log(error);
        }
    }
    


    const InputField = () => {
        if ( (updateState.field === "name" ) || (updateState.field ==="city") || (updateState.field ==="state") || (updateState.field ==="image_url")) {
            return (
                <input type="text" id="fieldContent" onChange={handleChange} value={updateState.fieldContent}/>
            )
        } else if ((updateState.field === "date" )) {
            return (
                <div>date</div>
            )
        } else if ((updateState.field === "time" )) {
            return (
                <div>time</div>
            )
        } else if ((updateState.field === "ticket_price" )) {
            return (
                <div>price</div>
            )
        }
    }


    if (!editMode) {
        return <button onClick={() => setEditMode(true)}>Edit</button>
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <select id="field" onChange={handleChange} value={updateState.field}>
                <option value="name">name</option>
                <option value="date">date</option>
                <option value="time">time</option>
                <option value="ticket_price">price</option>
                <option value="city">city</option>
                <option value="state">state</option>
                <option value="image_url">image url</option>
            </select> */}
            {/* <InputField/> */}
            <input type="text" id="fieldContent" onChange={handleChange} value={updateState.fieldContent}/>
            <button className="update-button" type="submit">Update</button>
            <button onClick={() => setEditMode(false)}>Close</button>
            {/* <button onClick={() => ></button> */}
        </form>
    )
}


export default AdminUpdate