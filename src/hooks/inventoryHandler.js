export default function AddItem() {
    return(
        <>
            <div className="form-container">
                <form action="" className="rent-form">
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
                    <button>Create</button>
                </form>
            </div>
        </>
        
    );
};