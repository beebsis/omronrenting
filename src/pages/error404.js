import '../css/Main.css';
import '../css/error.css';

import React, { Component } from 'react';

class MissingPage extends Component {
    render() {
        return (
            <>
                <div className="error-container">
                    <div>
                        <h1>Error: 404</h1>
                        <h2>Sorry, the page you were trying to reach does not exist</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default MissingPage;