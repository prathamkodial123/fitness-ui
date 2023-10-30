
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
const NavBar = () => {
    const isLoggedIn = AuthService.isLoggedIn();
    const handleLogout = () => {
        AuthService.logout(); // 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <div className="row m-auto">
                    <div className="col-12 w-100 text-center">
                        <a className="navbar-brand w-100" href="index.html">Fitflex</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"></span> Menu
                        </button>
                    </div>
                    <div className="col-12 w-100 text-center">
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item ">
                                    <Link to="/home" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to="/trainer" className="nav-link">Trainer</Link></li>

                                {isLoggedIn ?
                                    (
                                        <>
                                            <li className="nav-item"><Link to="/class" className="nav-link">class</Link></li>
                                            <li className="nav-item"><Link to="/schedule" className="nav-link">Schedule</Link></li>
                                        </>
                                    )
                                    :
                                    (
                                        <></>
                                    )
                                }
                                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                                <li className="nav-item"><Link to="/blog-single" className="nav-link">Single Blog</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link" href="#" data-bs-toggle="dropdown">
                                        <span className="icon-user"></span>
                                    </span>
                                    <ul className="dropdown-menu">

                                        {isLoggedIn ?
                                            (
                                                <>
                                                    <li><Link className="dropdown-item" to="/calorie-counter">Calorie Counter</Link></li>
                                                    <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                                    <li><Link className="dropdown-item" to="/subscription">Subscription</Link></li>
                                                    <li className="dropdown-item" onClick={handleLogout}>Logout</li>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                                </>
                                            )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;