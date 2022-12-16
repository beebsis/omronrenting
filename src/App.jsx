import { NavLink, Route, Routes, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";
import Home from "./pages/Home";
import ContactInfo from "./pages/Contact";
import InventoryList from "./pages/Inventory";
import ManagementPage from "./pages/ManagementLanding";
import UsersList from "./pages/Users";
import RentedList from "./pages/Rented";
import Rent from "./pages/Rent";
import Missing from "./pages/error404";
import Unauthorized from "./pages/unautherized";
import MyRents from "./pages/MyRents";
import Landing from "./pages//Landing";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Hooks
import UserRegister from "./hooks/userRegister";

import profilePicture from "./assets/logo.png";
import MainNavigation from "./layouts/MainNavigation";

const User = "Alex5562";

export default function App() {
  return (
    <>
      <div>
        <header className="App-header">
          < MainNavigation />
        </header>

        <main className="App-main">
          <div className="Content">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<ContactInfo />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/landing" element={<Landing />} />

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
