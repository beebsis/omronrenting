import '../css/Main.css';
import '../css/error.css';

export default function Unauthorized() {
    return (
        <>
            <div className="error-container">
                <div>
                    <h1>Permissions missing</h1>
                    <h2>Requries a user with authorization clearence</h2>
                </div>
            </div>
        </>
    );

};