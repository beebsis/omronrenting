import '../css/Rent.css';
import '../css/components/table.css';
import '../css/components/input.css';

export default function Rent() {
    return (
        <>
        <div className="rent-container">
            <div className="form-container">
                <form action="" className="rent-form">
                    <fieldset className="rent-fieldset">
                        <div className="form-flexer">
                            <label>Username</label>
                            <input name="username" placeholder="Username . . ."></input>
                        </div>
                        <div className="form-flexer">
                            <label>UNI-login</label>
                            <input name="studentNumber" placeholder="Uni-loigin . . ."></input>
                        </div>
                    </fieldset>
                    <fieldset className="rent-fieldset">
                        <div className="form-flexer">
                            <label>Manufacturer</label>
                            <input name="Manufacturer" placeholder="Manufacturer . . ."/>
                        </div>
                        <div className="form-flexer">
                            <label>Model</label>
                            <input name="Model" placeholder="Model . . ."></input>
                        </div>
                    </fieldset>
                    <fieldset className="rent-fieldset">
                        <div className="form-flexer">
                            <label>Device Number</label>
                            <input name="deviceNumber" placeholder="Device Number . . ."></input>        
                        </div>
                        <div className="form-flexer last-ff">
                            <div>
                                <label>Type</label>
                                <select>
                                    <option value="pc">PC</option>
                                    <option value="mouse">Mouse</option>
                                    <option value="headset">Headset</option>
                                </select>
                            </div>
                            <div className="form-quan">
                                <label>Quantity</label>
                                <input id="quantity" name="quantity" placeholder="Quantity . . ."></input>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="rent-fieldset">
                        <div className="form-flexer">
                            <label>Start term</label>
                            <input name="start_term" type="date"></input>
                        </div>
                        <div className="form-flexer">
                            <label>End term</label>
                            <input name="end_term" type="date"></input>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="renting-list">
            <table className="rent-inventory">
                <thead>
                    <tr>
                        <th>Student #</th>
                        <th>Mfr, model, device #</th>
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