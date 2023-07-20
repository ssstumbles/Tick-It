import { useContext } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminCreate = () => {

    const { setAxiosAction }  = useContext(AxiosContext)

    const handleCreate = async () => {
            await axios.post(
                `http://127.0.0.1:8000/events/`,
                {
                    "id": 2,
                    "venue_id": 2,
                    "name": "Les Miserables",
                    "date": "2023-08-01",
                    "time": "19:30:00",
                    "ticket_price": 140,
                    "city": "Los Angeles",
                    "state": "CA",
                    "venue": "http://127.0.0.1:8000/venues/2?format=json",
                    "image_url": null
                }
            );
            setAxiosAction(true)
    }

    return (
        <>
            <button onClick={() => handleCreate()}>O</button>
        </>
    )
}

export default AdminCreate