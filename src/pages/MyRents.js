import '../css/Main.css';
import '../css/components/table.css';
import '../css/MyRents.css';

export default function MyRents() {
    return(
        <>
            <div className="MyRents-container">
                <div className="info-box">

                </div>
                <div className="rents">
                    <div>
                        <input placeholder="Search . . ." name="search-rent-table"></input>
                    </div>
                    <div>
                        <table>
                            <th>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                            </th>
                            <tb>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                                <tr></tr>
                            </tb>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};