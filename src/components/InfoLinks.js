import profilePicture from '../assets/logo.png';
import '../css/components/InfoLinks.css';

export default function InfoLinks() {
    return (
        <div className="info-links">
            <p>NETWORKS</p>
            <div className="link-container">
                <div className="link_reference">
                    <img src={profilePicture} alt="" />
                    <p>Pluralsight</p>
                </div>
                <div className="link_reference">
                    <img src={profilePicture} alt="" />
                    <p>Pluralsight</p>
                </div>
                <div className="link_reference">
                    <img src={profilePicture} alt="" />
                    <p>Pluralsight</p>
                </div>
                <div className="link_reference">
                    <img src={profilePicture} alt="" />
                    <p>Pluralsight</p>
                </div>
            </div>
        </div>
    );
}