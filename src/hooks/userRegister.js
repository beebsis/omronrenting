import "../css/Main.css";
import "../css/Index.css";
import "../css/userRegister.css";
/* eslint-disable no-lone-blocks */
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation,  faCheckCircle} from "@fortawesome/free-solid-svg-icons";

/* 
    USER_REGEX: must start with a lower or uppercase letter.
    Afterwards followed by 3 to 23 characters lower or uppercase,
    digits, hyphons or underscore. 
    
    PWD_REGEX: Requires at least one lowercase & uppercase letter
    One digit & 1 special character, 8 to 24 characters
*/
const USER_REGEX = /^[a-zA][a-zA-Z0-9-_]{3,23}$/;
const uniid_REGEX = /^[a-zA][a-zA-Z0-9-_]{7}$/;
const name_REGEX = /^[A-Za-z]{1,50}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register';

export default function Register() {
    const userRef = useRef();
    const errRef = useRef();

    //User field state
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //  Password
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // Matching password
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // firstN
    const [firstN, setfirstN] = useState('');
    const [validfirstN, setValidfirstN] = useState(false);
    const [firstNFocus, setfirstNFocus] = useState(false);

    // lastN
    const [lastN, setlastN] = useState('');
    const [validlastN, setValidlastN] = useState(false);
    const [lastNFocus, setlastNFocus] = useState(false);
    // CPR
    const [cpr, setCPR] = useState('');
    const validCPR = useState(false);
    const [cprFocus, setCPRFocus] = useState(false);

    // Email
    const [email, setEmail] = useState('');
    const validEmail  = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    // uniid
    const [uniid, setuniid] = useState('');
    const [validuniid, setValiduniid] = useState(false);
    const [uniidFocus, setuniidFocus] = useState(false);

    // Address
    const [address, setAddress] = useState('');
    const validAddress = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);

    // City
    const [city, setCity] = useState('');
    const validCity = useState(false);
    const [cityFocus, setCityFocus] = useState(false);
    
    // Postal
    const [postal, setPostal] = useState('');
    const validPostal = useState(false);
    const [postalFocus, setPostalFocus] = useState(false);
    
    // StamClass
    const [stamClass, setStamClass] = useState('');
    const validStamClass = useState(false);
    const [stamclassFocus, setStamclassFocus] = useState(false);
    

    //Info message states
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //Applying useEffect hooks
    useEffect(() => {
        userRef.current.focus();
    }, []);
    
    //Check if username follows USER_REGEX
    useEffect(() =>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = uniid_REGEX.test(uniid);
        console.log(result);
        console.log(uniid);
        setValiduniid(result);
    }, [uniid]);

    useEffect(() => {
        const result1 = name_REGEX.test(firstN);
        const result2 = name_REGEX.test(lastN);
        console.log(`firstN: ${result1}`, `lastN: ${result2}`);
        setValidfirstN(result1);
        setValidlastN(result2);
    }, [firstN, lastN])

    //Checks if password follows PWD_REGEX and matches in-real-time
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    //Job to display error
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Security messaures for console scripting
        // If button enabled through Console JS commands
        // v3 & v4 might cause issues. as of right now.
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = name_REGEX.test(firstN && lastN);
        const v4 = uniid_REGEX.test(uniid);
        if (!v1 || !v2 || !v3 || !v4) {
            setErrMsg("Invalid Entry");
            return;
        };
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({user, pwd, firstN, lastN, email, uniid, stamClass, cpr, address, postal, city}),
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
    };


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
            <h1 className="user-register-section-h1">User Register</h1>
            <form className="user-registration-form" onSubmit={handleSubmit}>
                <div>
                    <fieldset>
                        <label htmlFor="username">
                            Brugernavn:
                            <FontAwesomeIcon icon={faCheckCircle} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faCircleExclamation} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input 
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="nope"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                    
                    <fieldset>
                        <label htmlFor="uniid">
                            UNI-ID:
                        </label>
                        <input 
                            type="text"
                            id="uniid"
                            autoComplete="nope"
                            onChange={(e) => setuniid(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setuniidFocus(true)}
                            onBlur={() => setuniidFocus(false)}
                        />
                        <p id="uidnote" className={uniidFocus && uniid && !validuniid ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="stamClass">
                            Stam klasse:
                        </label>
                        <input 
                            type="text"
                            id="stamclass"
                            autoComplete="nope"
                            onChange={(e) => setStamClass(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setStamclassFocus(true)}
                            onBlur={() => setStamclassFocus(false)}
                        />
                        <p id="uidnote" className={stamclassFocus && stamClass && !validStamClass ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="firstN">
                            Fornavn:
                        </label>
                        <input 
                            type="text"
                            id="firstN"
                            autoComplete="nope"
                            onChange={(e) => setfirstN(e.target.value)}
                            required
                            aria-invalid={validfirstN ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setfirstNFocus(true)}
                            onBlur={() => setfirstNFocus(false)}
                        />
                        <p id="uidnote" className={firstNFocus && firstN && !validfirstN ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="lastN">
                            Efternavn:
                        </label>
                        <input 
                            type="text"
                            id="lastN"
                            autoComplete="nope"
                            onChange={(e) => setlastN(e.target.value)}
                            required
                            aria-invalid={validfirstN ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setlastNFocus(true)}
                            onBlur={() => setlastNFocus(false)}
                        />
                        <p id="uidnote" className={lastNFocus && lastN && !validlastN ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="cpr">
                            CPR:
                        </label>
                        <input 
                            type="text"
                            id="cpr"
                            autoComplete="nope"
                            onChange={(e) => setCPR(e.target.value)}
                            required
                            aria-invalid={validCPR ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setCPRFocus(true)}
                            onBlur={() => setCPRFocus(false)}
                        />
                        <p id="uidnote" className={cprFocus && cpr && !validCPR ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">
                            E-mail:
                        </label>
                        <input 
                            type="text"
                            id="email"
                            autoComplete="nope"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="city">
                            By:
                        </label>
                        <input 
                            type="text"
                            id="city"
                            autoComplete="nope"
                            onChange={(e) => setCity(e.target.value)}
                            required
                            aria-invalid={validCPR ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setCityFocus(true)}
                            onBlur={() => setCityFocus(false)}
                        />
                        <p id="uidnote" className={cityFocus && city && !validCity ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                    <fieldset>
                            <label htmlFor="postal">
                                Zip:
                            </label>
                            <input 
                                type="text"
                                id="postal"
                                autoComplete="nope"
                                onChange={(e) => setPostal(e.target.value)}
                                required
                                aria-invalid={validCPR ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setPostalFocus(true)}
                                onBlur={() => setPostalFocus(false)}
                            />
                            <p id="uidnote" className={postalFocus && postal && !validPostal ? "instructions" : "offscreen"}>
                                2 to 24 characters <br/>
                                Must beging with a letter. <br/>
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </fieldset>
                        <fieldset>
                        <label htmlFor="address">
                            Adresse:
                        </label>
                        <input 
                            type="text"
                            id="address"
                            autoComplete="nope"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            aria-invalid={validCPR ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setAddressFocus(true)}
                            onBlur={() => setAddressFocus(false)}
                        />
                        <p id="uidnote" className={addressFocus && address && !validAddress ? "instructions" : "offscreen"}>
                            2 to 24 characters <br/>
                            Must beging with a letter. <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheckCircle} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faCircleExclamation} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input 
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            autoComplete="nope"
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 to 24 characters <br/>
                            Must include uppercase & lowercase letters, a number & a special character. <br/>
                            Allwoed special characters:
                            <span aria-label="exclemation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sigh">$</span>
                            <span aria-label="percent">%</span>
                        </p>
                    </fieldset>


                    <fieldset>
                        <label htmlFor="confirm_pwd">
                            Confirm Password Match:
                            <FontAwesomeIcon icon={faCheckCircle} className={validMatch ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faCircleExclamation} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input 
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            Must match the first password input field.
                        </p>
                    </fieldset>
                </div>

                <button id="userRegisterBtn" disabled={!validName || !validPwd || !validMatch ? true : false}>
                    Register user
                </button>
                
            </form>
        </section>
        )}
        </>
    );
};