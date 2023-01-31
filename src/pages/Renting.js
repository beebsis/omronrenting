import '../css/Rent.css';
import '../css/components/table.css';
import '../css/components/form.css';

/* eslint-disable no-lone-blocks */
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

export default function Rent() {
    
    
    return (
        <>
        <div className="rent-container">
            <div className="form-container">
                <form action="" className="rent-form">
                    <div>
                        <fieldset>
                                <label>Username</label>
                                <input name="username" placeholder="Username . . ."></input>
                        </fieldset>
                        <fieldset>
                                <label>UNI-login</label>
                                <input name="studentNumber" placeholder="Uni-loigin . . ."></input>
                        </fieldset>
                    </div>

                    <div>
                        <fieldset>
                                <label>Manufacturer</label>
                                <input name="Manufacturer" placeholder="Manufacturer . . ."/>
                        </fieldset>
                        <fieldset>
                                <label>Model</label>
                                <input name="Model" placeholder="Model . . ."></input>
                        </fieldset>

                        <fieldset>
                                <label>Device Number</label>
                                <input name="deviceNumber" placeholder="Device Number . . ."></input>        
                        </fieldset>
                    </div>

                    <div>
                        <fieldset className="reserve-container">
                            <label>Reserve</label>
                            <input type="checkbox" id="reserved-form-option" name="reserved-form-option"/>
                        </fieldset>
                        <fieldset>
                                    <label>Type</label>
                                    <select>
                                        <option value="pc">PC</option>
                                        <option value="mouse">Mouse</option>
                                        <option value="headset">Headset</option>
                                    </select>
                        </fieldset>
                        <fieldset>
                                    <label>Quantity</label>
                                    <input id="quantity" name="quantity" placeholder="Quantity . . ."></input>
                        </fieldset>
                    </div>

                    <div>
                        <fieldset>
                                <label>Start term</label>
                                <input name="start_term" type="date"></input>
                        </fieldset>
                        <fieldset>
                                <label>End term</label>
                                <input name="end_term" type="date"></input>
                        </fieldset>
                    </div>

                    <button>Create</button>
                </form>
            </div>
            <div className="renting-list">
                <div>
                    <h3>Renting List</h3>
                </div>
            <table className="rent-inventory">
                <thead>
                    <tr>
                        <th>Student #</th>
                        <th>fabri, model, device #</th>
                        <th>Type</th>
                        <th>#</th>
                        <th>Start term</th>
                        <th>End Term</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>alex5562</td>
                        <td>Logitech, MX Master 3S, 8321</td>
                        <td>mouse</td>
                        <td>1</td>
                        <td>14/11/2022</td>
                        <td>20/12/2022</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
}