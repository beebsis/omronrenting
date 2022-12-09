/* eslint-disable no-lone-blocks */
import { useRef, useState, useEffect } from 'react';
//import { faCheck, faTimes, faInfoCircle }  from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-contawesome';

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
    };


    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}></span>
                    <span className={validName || !user ? "hide" : "invalid"}></span>
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

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}></span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}></span>
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


                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}></span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}></span>
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
    );
};