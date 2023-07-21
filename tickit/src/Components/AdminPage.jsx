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
            <div className='admin-route-body'>
                <div className='admin-options'>
                    <button onClick={() => setEventsPage(false)}>Venues</button>
                    <button onClick={() => setEventsPage(true)}>Events</button>
                </div>
                <div className="admin-panel">
                    { eventsPage ? (
                        <>
                            <div className='admin-page-title'>EVENTS</div>
                            <AdminEventList />
                            <AdminEventCreate />
                        </>
                    ) : (
                        <>
                            <div className='admin-page-title'>VENUES</div>
                            <AdminVenueList />
                            <AdminVenueCreate />
                        </>
                    )}
                </div>
                
                
            </div>
        </AxiosContext.Provider>
    )
}

export default AdminPage