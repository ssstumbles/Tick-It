import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/venues">Venues</Link>
            <Link to="/events">Events</Link>
        </div>
    )
}

export default Nav