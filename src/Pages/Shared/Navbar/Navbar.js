import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/NavbarLogo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="*">Contact</Link></li>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost m-1">Options</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52">
                <li><Link to="/addmobile">Add A Mobile(Seller)</Link></li>
                <li><Link to="/">Buy A Mobile(Buyer)</Link></li>
            </ul>
        </div>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}

    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"> <img className=' w-16 rounded-full ' src={logo} alt="" /> Mobile Gadgets</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;