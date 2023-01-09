import profilePicture from '../assets/logo.png';
import '../css/components/InfoLinks.css';
import React, { Component } from 'react';

class InfoLinks extends Component {
    render() {
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
        )
    }
}

export default InfoLinks;