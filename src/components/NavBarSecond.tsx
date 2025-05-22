import React, { FC } from 'react';
//Components
import "./albetonStyle.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBarSecond: FC = () => {
    return (
        <Navbar sticky="top" className='cs-bg-white px-3 py-3 mt-1 py-0'>
            <Nav className='w-100'>
                <Nav.Item>
                    <Nav.Link href='' className='cs-link cs-transition text-black'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='' className='cs-link cs-transition text-black'>Jobs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='' className='cs-link cs-transition text-black'>Apprenticeships</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavBarSecond;