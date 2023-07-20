import AdminList from "./AdminList";
import AdminCreate from "./AdminCreate"
import AxiosContext from '../AxiosContext'

import { useState } from "react"

const AdminPage = () => {

    const [axiosAction, setAxiosAction] = useState(false)

    

    return (
        <AxiosContext.Provider value={{ axiosAction, setAxiosAction}}>
            <div className='route-body'>
                <AdminList/>
                <AdminCreate/>
            </div>
        </AxiosContext.Provider>
    )
}

export default AdminPage