import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactInfo from "./pages/Contact";
import InventoryList from "./pages/Inventory";
import ManagementPage from "./pages/ManagementLanding";
import UsersList from "./pages/Users";
import RentedList from "./pages/Rented";
import Rent from "./pages/Renting.js";
import Missing from "./pages/error404";
import Unauthorized from "./pages/unautherized";
import MyRents from "./pages/MyRents";
import Landing from "./pages//Landing";
import Login from "./components/login"

//css
import './css/navigation.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

//Hooks
import UserRegister from "./hooks/userRegister";

import profilePicture from "./assets/logo.png";

const User = "Alex5562";

export default function App() {
  return (
    <>
      <div>
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
                {/*<li>
                    <NavLink to="contact">Contact</NavLink>
                </li>*/}
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
                {/*<li>
                    <NavLink to="MyRents">My Rents</NavLink>
                </li>*/}
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

        <main className="App-main">
          <div className="Content">
            <Routes>
              {/* Public routes */}
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/contact" element={<ContactInfo />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<Login />} />

              {/* Protected routes */}
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/rented" element={<RentedList />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/myrents" element={<MyRents />} />
              {/* Hook routes */}
              <Route path="/UserRegister" element={<UserRegister />} />

              {/* Catch all routes */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}
