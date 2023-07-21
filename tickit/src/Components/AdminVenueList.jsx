import axios from "axios";
import { useEffect, useState, useContext } from "react"
import AxiosContext from "../AxiosContext";

import AdminVenueUpdate from "./AdminVenueUpdate"

const AdminVenueList = () => {

    const [venues, setVenues] = useState();
    
    const { axiosAction, setAxiosAction }  = useContext(AxiosContext)

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get(`https://tick-it-backend-production.up.railway.app/venues`)
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
                `https://tick-it-backend-production.up.railway.app/venues/${id}`
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
        <div className='admin-list'>
           {venues.map((ven) => (
                    <div key={ven.id}>
                        <div>{ven.name}</div>
                        <AdminVenueUpdate id={ven.id} name={ven.name} location={ven.location} capacity={ven.capacity} website_url={ven.website_url} venue_description={ven.venue_description}/>
                        <button onClick={() => handleDelete(ven.id)}>Delete</button>
                    </div>
                ))}
        </div>
    )
}

export default AdminVenueList