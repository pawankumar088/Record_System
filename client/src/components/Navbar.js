import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    let Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        Navigate('/Login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <from className="d-flex">
                            <Link to="/Login" className='btn btn-success mx-1' role='button'>Login</Link>
                            <Link to="/Signup" className='btn btn-success mx-1' role='button'>Signup</Link>
                        </from> : <button onClick={handleLogout} className='btn btn-success'>Logout</button>}
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar