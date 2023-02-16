import React from 'react';
import Nav from '../Nav';
import './login.css'
import Coutomhoks from './Coutomhoks.jsx'
import { Link } from 'react-router-dom';

const Login = (props) => {
    const { Hedalchang, input, error } = Coutomhoks({}, { UsernameError: "", Passworderror: "" })
    return (
        <>
            <Nav />
            <div className='login-page'>
                <div className="container">
                    <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                            <div className="image">
                            </div>
                        </div>
                        <div className="body-form">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input onChange={Hedalchang} name="Username" type="text" className="form-control" placeholder="Username" />
                                    {error.UsernameError}
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input onChange={Hedalchang} type="password" name="Password" className="form-control" placeholder="Password" />
                                    {/* {JSON.stringify(input)} */}
                                </div>
                                <button type="button" className="btn button-login btn-secondary btn-block">LOGIN</button>
                                <div className="message">
                                    <div><input type="checkbox" /> Remember ME</div>
                                    <div><Link to='/Login'>Forgot your password</Link></div>
                                </div>
                                <div className='text-right'><Link to='/sing'>Creat New Account</Link></div>
                            </form>
                            <div className="social">
                                <Link to='/Login'><i className="fab fa-facebook"></i></Link>
                                <Link to='/Login'><i className="fab fa-twitter-square"></i></Link>
                                <Link to='/Login'><i className="fab fa-google"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
