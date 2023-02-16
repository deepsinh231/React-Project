import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav.jsx'
import './sing.css'

const Sing = () => {
    return (

        <>
            <Nav />
            <div className='login-page'>
                <div className="container">
                    <div className="form-box">
                        <div className="header-form">
                            {/* <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4> */}
                            {/* <div className="image"> */}
                            {/* <input type='file' accept="image/*"></input> */}
                            {/* </div> */}
                            <div className="profile-pic-wrapper">
                                <div className="pic-holder">
                                    <img id="profilePic" className="pic" src={window.location.origin +'/user.png'} />
                                    <input className="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto" accept="image/*" />
                                    <label for="newProfilePhoto" className="upload-file-block">
                                        <div className="text-center">
                                            <div className="mb-2">
                                                <i className="fa fa-camera fa-2x"></i>
                                            </div>
                                            <div className="text-uppercase">
                                                Update <br /> Profile Photo
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="body-form">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input name="FirstName" type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input name="Last Name" type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-regular fa-calendar-days"></i></span>
                                    </div>
                                    <input name="DateofBirth" type="date" className="form-control" placeholder="Date of Birth" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                                    </div>
                                    <input name="number" type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                                    </div>
                                    <input name="email" type="email" className="form-control" placeholder="Email id" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" name="Password" className="form-control" placeholder="New Password" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" name="Password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <button type="button" className="btn button-login btn-secondary btn-block">Registr</button>
                                <div className='text-right'><Link to='/sing'>Login Account</Link></div>
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

export default Sing;




