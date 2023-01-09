import { NavLink } from "react-router-dom";

import '../css/mglandingpage.css';
import '../css//components/buttons.css';
import InfoLinks from '../components/InfoLinks'; 




const User = "Alex";
export default function ManagementLanding() {
    return(
        <>
            <div className="management-landing">
                <div className="management-landing-info">
                    <div className="management-landing-info-header">
                        <h1>Welcome {User}</h1>
                        <p>You have entered the management system area. In here you'll be able to lent equipment to tohers, check the invetory, users and reserved equipment. You cna also check what has been rented.</p>
                    </div>
                    <div className="management-buttons">
                    <NavLink className="NavLink-btn" to="/rent">
                        <button type="button" className="btns">Rent</button>
                    </NavLink>
                    <NavLink className="NavLink-btn" to="/rented">
                        <button type="button" className="btns">Rented</button>
                    </NavLink>
                    </div>
                    <InfoLinks />
                </div>
            </div>
        </>
    );
}