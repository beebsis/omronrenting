import '../css/landing.css';
export default function Landing() {
    return (
    <>
        <div className="login-form-container">
            <h1>Login</h1>
            <form action="" className="login-form">
                <fieldset>
                    <label>
                        Username:
                    </label>
                        <input />
                </fieldset>
                <fieldset>
                    <label>
                        Password:
                    </label>
                        <input type="password"/>
                </fieldset>
                <button>
                    Login
                </button>
            </form>
        </div>
    </>
    )
}