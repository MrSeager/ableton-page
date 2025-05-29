import { FC } from 'react';
//Components
import "./albetonStyle.css";
import NavBarOne from './NavBarOne.tsx';
import NavBarSecond from './NavBarSecond.tsx';
import AbletonBody from './AbletonBody.tsx';
import Footer from './Footer.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';


const AlbetonPage: FC = () => {
    return (
        <Container fluid className='p-0 bg-light'>
            <Container className='px-0 cs-w-1920 shadow bg-white'>
                <NavBarOne />
                <NavBarSecond />
                <AbletonBody />
                <Footer />
            </Container>
        </Container>
    );
}

export default AlbetonPage;