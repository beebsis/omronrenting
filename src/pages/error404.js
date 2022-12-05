import '../css/Main.css';
import '../css/error.css';

export default function MissingPage() {
    return (
        <>
            <div className="error404-container">
                <div>
                    <h1>Error: 404</h1>
                    <h2>Sorry, the page you were trying to reach does not exist</h2>
                </div>
            </div>
        </>
    );

};