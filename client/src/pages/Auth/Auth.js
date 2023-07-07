import React, { useState } from 'react'
import AboutAuth from './AboutAuth';
import './Auth.css';
import icon from '../../assets/overflow_icon.png';


const Auth = () => {

    const [isSignup, setIsSignup] = useState(false);

    const handleSwitch = () => {
        setIsSignup(!isSignup);
    }

    return (
        <section className="auth-section">
            { isSignup && <AboutAuth />}
            <div className="auth-container-2" style={{ marginTop: "100px" }}>
                {!isSignup && <img src={icon} alt="overflow-icon" className="overflow-icon-logo" width="58px"/>}
                <form>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display name</h4>
                                <input name='name' id='name' type='text' />
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type="email" name='email' id="email" />
                    </label>
                    <label htmlFor='password'>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
                            <h4>Password</h4>
                            {!isSignup && <span style={{color:"#007ac6",fontSize:"15px"}}> forgot password ?</span>}
                        </div>
                        <input type="password" name='password' id="password" />
                        { isSignup && <p style={{opacity:"0.53",marginTop:"3px",fontSize:"15px"}}> password must contain atleast eight
                        <br />characters,including at least 1<br /> letter and 1 number.</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type='checkbox' name="name" id="check" />
                                <p>
                                    Opt-in to recieve occational,product<br />  updates, user research invitations,<br /> company announcements, and digests.
                                </p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{isSignup ? "Sign up" : "Log in"}</button>
                    {
                        isSignup && (
                            <p style={{color:"#666767", fontSize:'14px',marginInline:"auto"}}>
                                By clicking "Sign up", you agree to our 
                                <span style={{color:"#007ac6"}}> terms<br /> of service </span>, 
                                <span style={{color:"#007ac6"}} > privacy policy </span> and 
                                <span style={{color:"#007ac6"}}> cookie policy </span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? "Already have an account ? " : "Don't have an account ? "}
                    <button type='button' className='auth-switch-btn' onClick={handleSwitch}> {isSignup ? "Log in" : "Sign up"} </button>
                </p>
            </div>
        </section>
    )
}

export default Auth
