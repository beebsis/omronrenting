import "../css/components/form.css";
import "../css/Main.css";
import "../css/Index.css";
import "../css/userRegister.css";
/* eslint-disable no-lone-blocks */
import { useRef, useState, useEffect } from 'react';


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
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    const userRef = useRef();
    const errRef = useRef();

    //User field state
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

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
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        };
        console.log(user, pwd);
        setSuccess(true);
    };


    return (
        <>
        {success ? (
            <section>
                <h1>Success</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className="user-register-section-h1">Register</h1>
            <form className="user-registration-form" onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">
                        Username:
                        <FontAwesomeIcon icon={faCheckCircle} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faCircleExclamation} className={validName || !user ? "hide" : "invalid"} />
                    </label>
                    <input 
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
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
                    <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheckCircle} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faCircleExclamation} className={validPwd || !user ? "hide" : "invalid"} />
                    </label>
                    <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        required
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
                        Confirm Password:
                        <FontAwesomeIcon icon={faCheckCircle} className={validMatch ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faCircleExclamation} className={validMatch || !user ? "hide" : "invalid"} />
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

                <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                    Sign up
                </button>
                
            </form>
            <p>
                Already registered?<br/>
                {/* Router link for redirection here */}
                <a href="#">Sign In</a>
            </p>
        </section>
        )}
        </>
    );
};