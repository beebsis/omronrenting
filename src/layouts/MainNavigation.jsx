
import './MainNavigation.css';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import profilePicture from "../assets/logo.png";


const User = "alex5562"

export default function MainNavigation() {
    return(
    <header className="App-header">
        <nav>
        <div className="navbar-wrapper">
            <div className="brand-container">
            <div className="logo-container">
                <img src={profilePicture} alt="test" />
                <h3>OMRON</h3>
            </div>
            <div className="nav-container">
                <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="inventory">Inventory</NavLink>
                </li>
                <li>
                    <NavLink to="management">Management</NavLink>
                </li>
                <li>
                    <NavLink to="users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="rented">Rented</NavLink>
                </li>
                <li>
                    <NavLink to="MyRents">My Rents</NavLink>
                </li>
                </ul>
            </div>

            <div className="user-container">
                <div className="user-info-container">
                <p>{User}</p>
                <p>sector</p>
                </div>

                <img src={profilePicture} alt="" />
            </div>
            </div>
        </div>
    </nav>
    </header>
    );
}