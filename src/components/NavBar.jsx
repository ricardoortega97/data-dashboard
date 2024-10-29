import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">
                <h2>🏠 DashBoard</h2>
                <h2>ℹ️ About</h2>
                <h2>🔍 Search</h2>
            </Link>
        <Outlet />
        </div>
    );
}

export default NavBar;