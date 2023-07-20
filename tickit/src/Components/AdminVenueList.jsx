import axios from "axios";
import { useEffect, useState, useContext } from "react"
import AxiosContext from "../AxiosContext";

import AdminVenueUpdate from "./AdminVenueUpdate"

const AdminVenueList = () => {

    const [venues, setVenues] = useState();
    
    const { axiosAction, setAxiosAction }  = useContext(AxiosContext)

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/venues`)
            setVenues(response.data)
        }
        console.log('got venues')
        getVenues()
    },[axiosAction])

    useEffect(() => {
        setAxiosAction(false)
    },[venues])


    const handleDelete = async(id) => {
        try {
            console.log(id)
            await axios.delete(
                `http://127.0.0.1:8000/venues/${id}`
            );
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }

    if (!venues) {
        return (
                <div className="loading">Loading...</div>
        )
    }
    
    return (
        <>
           {venues.map((ven) => (
                    <div key={ven.id}>
                        <div>{ven.name}</div>
                        <AdminVenueUpdate id={ven.id} name={ven.name} location={ven.location} capacity={ven.capacity} website_url={ven.website_url}/>
                        <button onClick={() => handleDelete(ven.id)}>X</button>
                    </div>
                ))}
        </>
    )
}

export default AdminVenueList