import {Link} from "react-router-dom";
import logo from "../assets/icon/ostad.png";

const AppNav = () => {
    return (
        <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
            <div className="container-fluid py-3 px-5">
                <a className="navbar-brand" href="#">
                    <img className="nav-logo" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nabarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/service">Service</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
                <Link className="btn btn-dark float-end" to="/login">Login</Link>
                <button className="btn mx-2 btn-dark float-end" >Logout</button>
            </div>
        </nav>
    );
};

export default AppNav;