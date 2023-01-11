// import { Component } from 'react';
import '../css/Inventory.css';
import '../css/components/table.css';
//import data from '../data/equipment.json';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

const ADD_ITEM_URL = '/createitem';
const number_REGEX = /^([0-9]{1,30})$/;

const background = "-background status-circle";


export default function Inventory() {
    const errRef = useRef();

    const [fabri, setFabri] = useState('');
    const [fabriFocus, setFabriFocus] = useState(false);

    const [modelSerie, setModelSerie] = useState('');
    const [modelSerieFocus, setModelSerieFocus] = useState(false);
    
    const [vareSerial, setVareSerial] = useState('');
    const [validVareSerial, setValidVareSerial] = useState(false)
    const [vareSerialFocus, setVareSerialFocus] = useState(false);

    const [specType, setSpecType] = useState('');
    const [specTypeFocus, setSpecTypeFocus] = useState(false);
    
    //Info message states
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Checks Valid Serial
    useEffect(() => {
        const result = number_REGEX.test(vareSerial);
        console.log(result);
        console.log(vareSerial); //checks what gets logged
        setValidVareSerial(result);
    }, [vareSerial]);
    
    useEffect(() => {
        setErrMsg('');
    }, [fabri,modelSerie, specType, vareSerial]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = number_REGEX.test(vareSerial);

    if (!v1) {
        setErrMsg("Invalid Entry");
        return;
    };

    try {
        const response = await axios.post(ADD_ITEM_URL,
            JSON.stringify({fabri, modelSerie, specType, vareSerial}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        // clear input fields out of registration fields
        } catch(err) {
            if (!err?.response) {
                setErrMsg('No response from the Server');
            } else if (err.response?.status === 409) {
                setErrMsg('Username taken');
            } else {
                setErrMsg('registration failed');
            }
            errRef.current.focus(); //For screen readers
        }
    }

        return (
            <>
        {success ? (
            <section className="register-success">
                <div>
                    <h1>User registration Success</h1>
                </div>
            </section>
        ) : (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="inventory">
                <div className="form-container">
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="rent-form">
                            <fieldset>
                                    <label>Manufacturer</label>
                                    <input
                                        name="Manufacturer"
                                        placeholder="Manufacturer . . ."
                                        type="text"
                                        autoComplete="nope"
                                        required
                                        onChange={(e) => setFabri(e.target.value)}
                                        onFocus={() => setFabriFocus(true)}
                                        onBlur={() => setFabriFocus(false)}
                                    />
                            </fieldset>

                            <fieldset>
                                    <label>Model</label>
                                    <input 
                                        name="Model" 
                                        placeholder="Model . . ."
                                        type="text"
                                        autoComplete="nope"
                                        required
                                        onChange={(e) => setModelSerie(e.target.value)}
                                        onFocus={() => setModelSerieFocus(true)}
                                        onBlur={() => setModelSerieFocus(false)}
                                    />
                            </fieldset>

                            <fieldset>
                                    <label>Device Number</label>
                                    <input
                                        name="deviceNumber"
                                        placeholder="Device Number . . ."
                                        type="text"
                                        autoComplete="nope"
                                        required
                                        aria-invalid={validVareSerial ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onChange={(e) => setVareSerial(e.target.value)}
                                        onFocus={() => setVareSerialFocus(true)}
                                        onBlur={() => setVareSerialFocus(false)}
                                    />     
                            </fieldset>

                            <fieldset>
                                <label>Type</label>
                                <select
                                    onChange={(e) => setSpecType(e.target.value)}
                                >
                                    <option value="" selected disabled hidden>Select type</option>
                                    <option value="pc">Stationary PC</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="keyboard">Keyboard</option>
                                    <option value="mouse">Keyboard</option>
                                    <option value="headset">Headset</option>
                                </select>
                            </fieldset>

                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
                <div className="table-inventory-container">
                    <div className="inventory-list">
                        <h3>Renting List</h3>
                        <div className="inventory-search-container">
                            <label>Search</label>
                            <input type="text" name="search_inventory" id="search_inventory" placeholder="Search"/>
                        </div>
                    </div>
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Set classname based on inv */}
                                <td className="inv">
                                    {/* classname based on status */}
                                    <div className={background}></div></td>
                            </tr>
                        {/*  {data.computers.map((postData, i) => {
                            console.log(postData);
                            return (
                                <tr key={i}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="inv">
                                        <div className={background}></div></td>
                                </tr>
                            );
                        })} */}
                        </tbody>
                    </table>
                </div>
            </div>


        </section>
        )}
        </>
        )
};