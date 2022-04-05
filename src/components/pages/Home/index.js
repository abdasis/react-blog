import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./index.css"

const Home = () => {
    return (
        <Container>
            <Row className='salam align-items-center'>
                <Col md={6} sm={12} xs={12}>
                    <h1>Hi, I'm Abdul Aziz</h1>
                    <p>I'm a Software Engineer from Indonesia using PHP and Laravel Framework.</p>
                    <p> <strong>Reach me via email at <a href="mailto:id.abdasis@gmail.com">id.abdasis@gmail.com</a>, or Twitter at <a href="https://twitter.com/idabdasis">@idabdasis</a>.</strong> </p>
                </Col>
                <Col md={6}>
                </Col>
            </Row>

        </Container>
    )
}

export default Home
