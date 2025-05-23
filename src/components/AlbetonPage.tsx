import { FC } from 'react';
//Components
import "./albetonStyle.css";
import NavBarOne from './NavBarOne.tsx';
import NavBarSecond from './NavBarSecond.tsx';
import AbletonBody from './AbletonBody.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
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
            <Container fluid className='border-top py-5'>
                <Row className='cs-w-80 mx-auto'>
                    <Col xs={12}>
                        <h3 className='display-2'>Albeton</h3>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AlbetonPage;