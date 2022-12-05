import { Link } from "react-router-dom";

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
                        <Link className="btns-link" to="/rent">Rent</Link>
                        <Link className="btns-link" to="/rented">Rented</Link>
                    </div>
                    <InfoLinks />
                </div>
            </div>
        </>
    );
}