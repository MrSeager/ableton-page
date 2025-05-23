import { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
//Images
import FirstImg from '../images/pexels-pixabay-164716.jpg';
import SecImg from '../images/pexels-rombo-1510555-2912983.jpg';
import ThrImg from '../images/pexels-pixabay-257904.jpg';
import FouImg from '../images/pexels-ellis-1389429.jpg';
import FifImg from '../images/pexels-rombo-1510555-2912981.jpg';
import SixImg from '../images/pexels-stephendn-63703.jpg';
import SevImg from '../images/pexels-david-bares-42311-323687.jpg';
import EigImg from '../images/pexels-foteros-352505.jpg';
import NinImg from '../images/pexels-hendrikbgr-744318.jpg';
import TenImg from '../images/pexels-kooldark-17382268.jpg';
//Video
import vidOne from '../video/855548-hd_1920_1080_25fps.mp4';

const AbletonBody: FC = () => {
    return (
        <Container fluid className='px-0 mx-0 d-flex flex-column align-items-center gap-5'>
            <Container fluid className='my-lg-5 position-relative py-0 px-5'>
                <Image fluid src={FirstImg} alt='Albeton' />
                <h1 className='display-1 cs-fc-two cs-fw-700 position-absolute top-50 start-50 translate-middle'>Albeton</h1>
            </Container>
            <Container fluid className='my-lg-5 cs-w-65'>
                <h2 className='h3 cs-fw-500'>We make <span className='cs-fc-one'>Live</span>, <span className='cs-fc-one'>Push</span>, <span className='cs-fc-one'>Note</span>, <span className='cs-fc-one'>Move</span> and <span className='cs-fc-one'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p className='mt-3'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </Container>
            <Container as={Row} fluid className='my-lg-5 py-5 cs-bg-gradient d-flex flex-row align-items-center justify-content-around px-0'>
                <Col xs={6} className='my-5 d-flex flex-column align-items-center'>
                    <Image fluid src={SecImg} alt='image' className='w-75' />
                </Col>
                <Col xs={6} className='my-5 d-flex flex-column align-items-center'>
                    <Image fluid src={ThrImg} alt='image' className='w-75' />
                </Col>
            </Container>
            <Container fluid className='px-5 cs-w-65'>
                <h2 className='h3 cs-fw-500'>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
                <p className='mt-3'>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </Container>
            <Container fluid className='px-5 my-lg-5 d-flex flex-column align-items-center'>
                <video controls className='cs-w-85'>
                    <source src={vidOne} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className='cs-w-85 text-start'>Why Ableton - Juanpe Bolivar</p>
            </Container>
            <Container fluid className='cs-w-65 my-lg-5'>
                <h2 className='h3 cs-fw-500'>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h2>
                <p className='mt-3'>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
            </Container>
            <Container as={Row} fluid className='my-lg-5 py-5 cs-bg-gradient-two d-flex flex-row align-items-center justify-content-around px-0'>
                <Col xs={6} className='my-5 d-flex flex-column gap-5 align-items-center'>
                    <Image fluid src={FouImg} alt='image' className='w-75' />
                    <Image fluid src={SixImg} alt='image' className='w-75' />
                </Col>
                <Col xs={6} className='my-5 d-flex flex-column align-items-center'>
                    <Image fluid src={FifImg} alt='image' className='w-75' />
                </Col>
            </Container>
            <Container fluid className='cs-w-65 my-lg-5'>
                <h2 className='h3 cs-fw-500'>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h2>
                <p className='mt-3'>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
            </Container>
            <Container fluid className='my-lg-5 px-5 d-flex flex-column align-items-center'>
                <Image fluid src={SevImg} alt='image' className='cs-w-85' />
            </Container>
            <Container fluid className='cs-w-65 my-lg-5'>
                <h2 className='h3 cs-fw-500'>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h2>
                <p className='mt-3'>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
                <p className='mt-3'>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
            </Container>
            <Container as={Row} fluid className='my-lg-5 py-5 cs-bg-gradient-three d-flex flex-row align-items-center justify-content-around px-0'>
                <Col xs={6} className='my-5 d-flex flex-column gap-5 align-items-center'>
                    <Image fluid src={NinImg} alt='image' className='w-75' />
                </Col>
                <Col xs={6} className='my-5 d-flex flex-column align-items-end px-0'>
                    <Image fluid src={EigImg} alt='image' className='cs-w-80' />
                </Col>
            </Container>
            <Container fluid className='cs-w-65 my-lg-5'>
                <h2 className='h3 cs-fw-500'>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h2>
                <p className='mt-3'>If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
            </Container>
            <Container fluid className='my-lg-5 py-5 d-flex flex-row align-items-center justify-content-around px-0'>
                <Row className='cs-bg-blue cs-w-80'>
                    <Col lg={6} xs={12} className='d-flex flex-column align-items-center p-0'>
                        <Image fluid src={TenImg} alt='image' className='' />
                    </Col>
                    <Col lg={6} xs={12} className='my-5 d-flex flex-column align-items-center justify-content-center gap-3'>
                        <h2 className='w-75 h3 cs-fw-500'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
                        <Button className='w-75 text-start px-0 cs-link cs-transition cs-fc-one cs-fz-20 cs-fw-600 bg-transparent border-0'>See latest jobs &gt;</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AbletonBody;