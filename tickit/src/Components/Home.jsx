import { NavLink } from 'react-router-dom';
const Home = () => { 

    return (
   
            <div className='home'>
                <h1>Welcome</h1> 
                <div>
                    
                <div className='home-L1'>Featured Events:</div>
                <div className='home-L2'>JULY 25-30</div>
                <div className='home-L3'>MANCHESTER ORCHESTRA <br/> & JIMMY EAT WORLD</div>
                <NavLink to="venues" className='home-nav-link'>Venues</NavLink>
                <NavLink to="events" className='home-nav-link'>Events</NavLink>
                </div>
            </div>
    )
}

export default Home