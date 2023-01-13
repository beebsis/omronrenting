import {useState, useEffect } from 'react';
import axios from '../api/axios.js';

const background = "-background status-circle";
const GETITEMS_URL = '/items';

const Prop = (props) => {
    return(
        <tr>
                <td id={props.vare._id}></td>
                <td>{props.vare.fabrikant}</td>
                <td>{props.vare.model}</td>
                <td>{props.vare.serial}</td>
                <td>{props.vare.typer}</td>
                <td className="inv">
                    {props.vare.status}
                    <div className={background}></div>
                </td>
            </tr>
    )
}

const GetAllItems = () => {
    const [itemList, setItemList] = useState({ items: []})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(GETITEMS_URL);
            setItemList({ items: result.data})
            //setVare(res.data.vare)
            console.log(result.data);
        };
        fetchData();
        }, []);

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
                {/*
                {
                    itemList.items.map((current, i) => (
                        <Prop item={current} key={i} />
                    ))
                }
                */} 
                <tr>
                    <td>1</td>
                    <td>test fabrikant</td>
                    <td>test model</td>
                    <td>test serial</td>
                    <td> test typer</td>
                    <td className="inv">
                        test status
                        <div className={background}></div>
                    </td>
            </tr>
            </tbody>
        </table>
        </section>
        </>
    )


}




export default GetAllItems;