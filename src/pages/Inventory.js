// import { Component } from 'react';
import '../css/Inventory.css';
import '../css/components/table.css';
import data from '../data/equipment.json';
import AddItem from '../hooks/inventoryHandler';
import React, { Component } from 'react';

const background = "-background status-circle";


class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <div className="form-container">
                    <AddItem />
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
            </div>
        )
    }
}

export default Inventory;