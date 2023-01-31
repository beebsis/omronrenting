import {useState, useEffect } from 'react';
import axios from '../api/axios.js';

const GETITEMS_URL = 'http://localhost:3500/users';


export default function GetAllUsers() {
    const [users, getUsers] = useState('');
    
    useEffect(() => {
        axios.get(GETITEMS_URL).then((response) => {
            getUsers(response.data);
        });
    }, []);
    
    if (!users) return null;

    return (
        <>
            {users && users.map((user) =>
                <div className="user">
                    <div className="userBorder">
                        <div className="table-grid">
                            <div className="userList_id">
                                <span className="userList_header_text">UNI-ID</span>
                                <span className="userList_userinfo">{user.uniId}</span>
                            </div>
                            <div className="userList_name">
                                <span className="userList_header_text">Name</span>
                                <span className="userList_userinfo">{user.fornavn} {user.efternavn}</span>
                            </div>
                            <div className="userList_address">
                                <span className="userList_header_text">Address</span>
                                <span className="userList_userinfo">{user.adresse}</span>
                            </div>
                            <div className="userList_city">
                                <span className="userList_header_text">City</span>
                                <span className="userList_userinfo">{user.by}</span>
                            </div>
                            <div className="userList_zip">
                                <span className="userList_header_text">Zip</span>
                                <span className="userList_userinfo">{user.zip}</span>
                            </div>
                            <div className="userList_cpr">
                                <span className="userList_header_text">CPR</span>
                                <span className="userList_userinfo">{user.cprNr}</span>
                            </div>
                            <div className="userList_email">
                                <span className="userList_header_text">Email</span>
                                <span className="userList_userinfo">{user.email}</span>
                            </div>
                            <div className="userList_class">
                                <span className="userList_header_text">Class</span>
                                <span className="userList_userinfo">{user.stamklasse}</span>
                            </div>
                            <div className="userList_role">
                                <span className="userList_header_text">Role</span>
                                <span className="userList_userinfo">{user.roles[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            )}
        </>
    )


};