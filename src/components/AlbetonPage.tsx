import { FC, useEffect, useState } from 'react';
//Components
import "./albetonStyle.css";
import NavBarOne from './NavBarOne.tsx';
import NavBarSecond from './NavBarSecond.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import FirstImg from '../images/pexels-pixabay-164716.jpg';



const AlbetonPage: FC = () => {
    const [textProps, setTextProps] = useState<string[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/mr-seager-portfolio/refs/heads/main/src/data.json').then((response) => {
          setTextProps(response.data);
        });
    }, []);

    return (
        <Container fluid className='px-0'>
            <NavBarOne />
            <NavBarSecond />
            <Container className='d-flex flex-column align-items-center gap-3'>
                <Container className='mt-5 position-relative border p-0'>
                    <Image fluid src={FirstImg} alt='Albeton' />
                    <h1 className='display-1 cs-fc-two cs-fw-700 position-absolute top-50 start-50 translate-middle'>Albeton</h1>
                </Container>
                <Container>
                    <h2></h2>
                </Container>
            </Container>
        </Container>
    );
}

export default AlbetonPage;