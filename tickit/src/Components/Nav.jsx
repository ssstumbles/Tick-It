import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Nav