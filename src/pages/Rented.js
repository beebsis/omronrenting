import '../css/components/table.css';
import '../css/Rented.css';
import '../css/components/buttons.css';
import RentedData from '../data/rented.json';

const background = "-background status-circle";

export default function Rented() {
    return(
        <>
            <div className="rented-container">
                <div className="rented-header">
                    <h3>Rented Equipment</h3>
                    <button className="btns">Send Invoice</button>
                </div>
                <div className="rented-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Student #</th>
                                <th>Name</th>
                                <th>Equipment</th>
                                <th>Type</th>
                                <th>Qty</th>
                                <th>Start Term</th>
                                <th>End Term</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RentedData.map((postRentedData, i) => {
                                console.log(postRentedData, i);
                                return (
                                    <tr key={i}>
                                        <td>{postRentedData.id}</td>
                                        <td>{postRentedData.studentNumber}</td>
                                        <td>{postRentedData.name}</td>
                                        <td>{postRentedData.equipmentInfo + ""}</td>
                                        <td>{postRentedData.type}</td>
                                        <td>{postRentedData.quantity}</td>
                                        <td>{postRentedData.startTerm}</td>
                                        <td>{postRentedData.endTerm}</td>
                                        <td>{postRentedData.role}</td>
                                        <td className={postRentedData.status + " rented-status"}>{postRentedData.status}<div className={postRentedData.status + background}></div></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}