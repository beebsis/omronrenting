import '../css/login.css';
import '../css/components/form.css';
import {useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import axios from '../api/axios.js';

const LOGIN_URL = 'auth/';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Test in try');
            //Tilføjet axios + loginrul
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            console.log('end of try');
            setAuth({ user, pwd, roles, accessToken }); //Throws error
            setUser('');
            setPwd('');
            setSuccess(true);
            console.log(setSuccess);
        } catch (err) {
            if (!err?.response) {
                console.log('Test i Err 1');
                console.log(user);
                console.log(pwd);
                setErrMsg('Intent server svar');
            } else if (err.response?.status === 400) {
                setErrMsg('Mangle på brugernavn of kodeord');
            } else if (err.response?.status === 401) {
                setErrMsg('Uautoriseret');
            } else {
                setErrMsg('Login Fejl');
            }
            errRef.current.focus();
        }
    }
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <div className="login-panel-student">
                        <div>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <fieldset>
                                        <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        id="username-login"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />
                                    </fieldset>
                                </div>

                                <div>
                                    <fieldset>
                                        <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password-login"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    </fieldset>
                                </div>
                                <button>Sign In</button>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login;
