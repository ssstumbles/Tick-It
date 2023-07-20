import AdminEventList from "./AdminEventList";
import AdminEventCreate from "./AdminEventCreate"
import AdminVenueList from "./AdminVenueList";
import AdminVenueCreate from "./AdminVenueCreate";

import AxiosContext from '../AxiosContext'

import { useState } from "react"

const AdminPage = () => {

    const [axiosAction, setAxiosAction] = useState(false)

    const [eventsPage, setEventsPage] = useState(false)


    return (
        <AxiosContext.Provider value={{ axiosAction, setAxiosAction}}>
            <div className='route-body'>
                <button onClick={() => setEventsPage(false)}>Venues</button>
                <button onClick={() => setEventsPage(true)}>Events</button>
                { eventsPage ? (
                    <>
                        <AdminEventList />
                        <AdminEventCreate />
                    </>
                ) : (
                    <>
                        <AdminVenueList />
                        <AdminVenueCreate />
                    </>
                )}
                
            </div>
        </AxiosContext.Provider>
    )
}

export default AdminPage