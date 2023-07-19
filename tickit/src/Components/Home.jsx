import { NavLink } from 'react-router-dom';
const Home = () => { 

    return (
   
            <div className='home route-body'>
                <h1>Welcome</h1> 
                <div className="home-links">
                    <NavLink to="venues">Venues</NavLink>
                    <NavLink to="events">Events</NavLink>
                </div>
            </div>
    )
}

export default Home