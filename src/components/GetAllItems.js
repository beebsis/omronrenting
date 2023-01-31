import {useState, useEffect } from 'react';
import axios from '../api/axios.js';

const background = "-background status-circle";
const GETITEMS_URL = 'http://localhost:3500/items';


export default function GetAllItems() {
    const [items, getItems] = useState('');
    
    useEffect(() => {
        axios.get(GETITEMS_URL).then((response) => {
            getItems(response.data);
        });
    }, []);
    
    if (!items) return null;

    return (
        <>
            <section>
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
                    {items && items.map((item) =>
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.fabrikant}</td>
                            <td>{item.model}</td>
                            <td>{item.typer}</td>
                            <td>{item.serial}</td>
                            <td className="inv">
                                {item.status}
                                <div className={item.status + background}></div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </section>
        </>
    )


};