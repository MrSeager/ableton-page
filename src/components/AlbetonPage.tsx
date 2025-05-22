import { FC } from 'react';
//Components
import "./albetonStyle.css";
import NavBarOne from './NavBarOne.tsx';
import NavBarSecond from './NavBarSecond.tsx';
import AbletonBody from './AbletonBody.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Nav, Navbar, Row, Col } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';


const AlbetonPage: FC = () => {
    return (
        <Container fluid className='px-0'>
            <NavBarOne />
            <NavBarSecond />
            <AbletonBody />
        </Container>
    );
}

export default AlbetonPage;