import '../css/Users.css';
import '../css/components/table.css';
import GetAllUsers from '../components/GetAllUsers';
import { NavLink } from 'react-router-dom';


export default function Users () {    
    return (
        <>
            <div className="userlist-container">
                <div className="userlist-container-header">
                    <h1>Add User <span className="add-user"><NavLink to="/UserRegister">+</NavLink></span> </h1>
                    <input placeholder="Search . . . " name="SearchUser"></input>
                </div>
                <div className="table-container">
                    <div className="userList">

                    <GetAllUsers />
                    </div>
                </div>
            </div>
        </>
    );
}