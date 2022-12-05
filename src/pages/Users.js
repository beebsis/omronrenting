import '../css/Users.css';
import '../css/components/table.css';


export default function Users () {
    return (
        <>
            <div className="userlist-container">
                <div className="userlist-container-header">
                    <h1>Add User <span className="add-user">+</span> </h1>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="studentNumber">Student #</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>ZIP</th>
                                <th>CPR #</th>
                                <th>Email</th>
                                <th>Class</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody
                            ><tr>
                                <td>alex5562</td>
                                <td>Alexander Pedersen</td>
                                <td>Østergade 11g</td>
                                <td>Vissenbjerg</td>
                                <td>5492</td>
                                <td>000000-0000</td>
                                <td>alex5562@edu.sde.dk</td>
                                <td>H291</td>
                                <td>Administrator</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}