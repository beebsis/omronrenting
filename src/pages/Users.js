import '../css/Users.css';
import '../css/components/table.css';
import userData from '../data/users.json';
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

                    {userData.map((postUserData, i) => {
                                console.log(postUserData, i);
                                return (
                                    <div className="user" key={i}>
                                        <div className="userBorder">
                                            <div className="table-grid">
                                                <div className="userList_id">
                                                    <span className="userList_header_text">UNI-ID</span>
                                                    <span className="userList_userinfo">{postUserData.studentNumber}</span>
                                                </div>
                                                <div className="userList_name">
                                                    <span className="userList_header_text">Name</span>
                                                    <span className="userList_userinfo">{postUserData.name}</span>
                                                </div>
                                                <div className="userList_address">
                                                    <span className="userList_header_text">Address</span>
                                                    <span className="userList_userinfo">{postUserData.addressInfo.address}</span>
                                                </div>
                                                <div className="userList_city">
                                                    <span className="userList_header_text">City</span>
                                                    <span className="userList_userinfo">{postUserData.addressInfo.City}</span>
                                                </div>
                                                <div className="userList_zip">
                                                    <span className="userList_header_text">Zip</span>
                                                    <span className="userList_userinfo">{postUserData.addressInfo.ZIP}</span>
                                                </div>
                                                <div className="userList_cpr">
                                                    <span className="userList_header_text">CPR</span>
                                                    <span className="userList_userinfo">{postUserData.CPR}</span>
                                                </div>
                                                <div className="userList_email">
                                                    <span className="userList_header_text">Email</span>
                                                    <span className="userList_userinfo">{postUserData.Email}</span>
                                                </div>
                                                <div className="userList_class">
                                                    <span className="userList_header_text">Class</span>
                                                    <span className="userList_userinfo">{postUserData.team}</span>
                                                </div>
                                                <div className="userList_role">
                                                    <span className="userList_header_text">Role</span>
                                                    <span className="userList_userinfo">{postUserData.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}