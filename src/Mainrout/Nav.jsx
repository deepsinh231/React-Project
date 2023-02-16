import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    const Nevbarbtn = { "/Home": "Home", "/about": "About", "/Login": "Login","/api":"Api" }

    const nevbar = Object.keys(Nevbarbtn).map(link => (
        <MDBNavbarItem key={link}>
            <Link to={link} className='nav-link'>{Nevbarbtn[link]}</Link>
        </MDBNavbarItem>
    ))
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>DEEPSINH231</MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        {nevbar}
                    </MDBNavbarNav>
                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}