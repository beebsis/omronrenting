//import { Link } from 'react-router-dom';
import InfoLinks from '../components/InfoLinks.js';
import '../css/Main.css';
import '../css//components/buttons.css';
import Login from '../components/login';



export default function Home() {
    return (
            <div className="home-page-container">
                <div className="info-hero">
                    <div className="info-hero-header">
                        <h1>OMRON</h1>
                        <p>The management of Inventory, users as well as equipment lending and tracking. Preserve the inventory histroy here.</p>
                    </div>
                    <div className="info-hero-btns">
                        <button type="button" className="btns">Student</button>
                        <button type="button" className="btns">Management</button>
                    </div>
                    <InfoLinks />
                </div>

                <div className="splitter"></div>
                <Login />
            </div>
    );
}