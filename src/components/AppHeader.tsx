import { NavLink, useNavigate } from "react-router-dom";

export function AppHeader() {

    const navigate = useNavigate()

    function onBack() {//if i will want to go back sometimes
        navigate(-1)
    }
    return (
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mail'>Mail</NavLink>
            <NavLink to='/keep'>Keep</NavLink>
        </nav>
    )
}