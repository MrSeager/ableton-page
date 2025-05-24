import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const Footer: FC = () => {
    return (
        <Container fluid className='border-top py-5'>
            <Row className='cs-w-80 mx-auto gap-lg-0 gap-4'>
                <Col xs={{ span: 12, order: 1 }} className='p-0'>
                    <h3 className='display-3 my-5 cs-fw-500'>Albeton</h3>
                </Col>
                <Col lg={{ span: 3, order: 2}} xs={{ span: 12, order: 3 }} className='p-0 d-flex flex-column align-items-start gap-2'>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Register Live, Push or Move &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>About Ableton &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Jobs &gt;</Button>
                </Col>
                <Col lg={{ span: 4, order: 3}} xs={{ span: 12, order: 4}} className='p-0 d-flex flex-column align-items-start gap-2'>
                    <h4 className='h5 m-0'>Education</h4>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Offers for students and teachers &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Ableton for the Classroom &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Ableton for Colleges and Universities &gt;</Button>
                </Col>
                <Col lg={{ span: 5, order: 4 }} xs={{ span: 12, order: 2 }} className='p-0 d-flex flex-column align-items-start gap-2'>
                    <h4 className='h5 m-0'>Sign up to our newsletter</h4>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    <InputGroup>
                        <Form.Control
                            placeholder='Email Address'
                            aria-label='Email Address'
                            aria-describedby='basic-addon'
                            className='rounded-0 shadow-none'
                        />
                        <Button className='cs-btn cs-transition rounded-0'>Sign Up</Button>
                    </InputGroup>
                </Col>
                <Col xs={{ span: 12, order: 5 }} className='p-0 d-flex flex-column align-items-start gap-2'>
                    <h4 className='h5 m-0'>Community</h4>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Find Ableton User Groups &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Find Certified Training &gt;</Button>
                    <Button className='p-0 text-black cs-link cs-transition bg-transparent border-0'>Become a Certified Trainer &gt;</Button>
                </Col>
                <Col xs={{ span: 12, order: 5 }} className='px-0 py-4 d-flex flex-lg-row flex-column align-items-start gap-3'>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Contact Us</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Press Resources</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Legal Info</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Corporate Information</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Privacy Policy</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Cookie Settings</Button>
                    <Button className='border-0 bg-transparent cs-link cs-transition cs-fz-14 cs-fw-500 text-black p-0'>Imprint</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;