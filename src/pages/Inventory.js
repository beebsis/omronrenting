import '../css/Inventory.css';
import '../css/components/table.css';
import data from '../data/equipment.json';

const background = "-background status-circle";

export default function Inventory() {
    return (
        <div className="inventory">
            <div>
                <h3>PCs</h3>
                <table className="inventory-pc-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mfr.</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Serial</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {data.computers.map((postData, i) => {
                    console.log(postData);
                    return (
                        <tr key={i}>
                            <td>{postData.id}</td>
                            <td>{postData.mfr}</td>
                            <td>{postData.model}</td>
                            <td>{postData.type}</td>
                            <td>{postData.serial}</td>
                            <td className={postData.status[0] + " inv"}>{postData.status[1]}<div className={postData.status[0] + background}></div></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
            <div>
                <h3>Mouse</h3>
                <table className="inventory-mouse-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mfr.</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Serial</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {data.mouse.map((postData, i) => {
                    console.log(postData);
                    return (
                        <tr key={i}>
                            <td>{postData.id}</td>
                            <td>{postData.mfr}</td>
                            <td>{postData.model}</td>
                            <td>{postData.type}</td>
                            <td>{postData.serial}</td>
                            <td className={postData.status[0] + " inv"}>{postData.status[1]}<div className={postData.status[0] + background}></div></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
            <div>
                <h3>Headset</h3>
                <table className="inventory-mouse-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mfr.</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Serial</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {data.headset.map((postData, i) => {
                    console.log(postData);
                    return (
                        <tr key={i}>
                            <td>{postData.id}</td>
                            <td>{postData.mfr}</td>
                            <td>{postData.model}</td>
                            <td>{postData.type}</td>
                            <td>{postData.serial}</td>
                            <td className={postData.status[0] + " inv"}>{postData.status[1]}<div className={postData.status[0] + background}></div></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        </div>
    );
}