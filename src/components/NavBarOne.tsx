import React, { FC } from 'react';
//Components
import "./albetonStyle.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
//Images
import LogoImg from '../images/logo.png';

const NavBarOne: FC = () => {
    return (
        <Navbar expand='lg' bg='white' className='border-bottom px-3 w-100'>
            <Container fluid>
                <Navbar.Brand href='#'>
                    <Image fluid src={LogoImg} alt='logo' className='cs-image' />
                </Navbar.Brand>
                <Navbar.Toggle area-controls="navbarScroll" />
                <Navbar.Collapse id='navbarScroll' className='justify-content-between'>
                    <Nav navbarScroll>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Live</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Push</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Move</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Note</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Link</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Shop</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Packs</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition cs-fz-17 text-black cs-fw-600'>Help</Nav.Link>
                    </Nav>
                    <Nav className='flex-row justify-content-between align-items-center'>
                        <Nav.Link href='' className='cs-link cs-transition cs-fc-one cs-fz-20'>Try Live 12 for free</Nav.Link>
                        <Nav.Link href='' className='cs-link cs-transition text-black'>Log in or register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarOne;