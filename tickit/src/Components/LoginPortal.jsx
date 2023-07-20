import { NavLink } from "react-router-dom"

const LoginPortal = () => {
    
    return (
        <div className='route-body'>
            <div>login here</div>
            <NavLink to="/admin">Skip to Admin Side</NavLink>
        </div>
    )
}

export default LoginPortal