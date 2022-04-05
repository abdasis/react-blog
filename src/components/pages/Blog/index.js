import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Blog = () => {
    return (
        <Container className='mt-4'>
            <h1>Artikel</h1>
            <Row>
                <Col md={3}>
                    <Card className='border-0 shadow-sm' >
                        <Card.Body>
                            <Card.Title>
                                Artikel Pertama
                            </Card.Title>
                            <Card.Text className='blog-description'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem alias provident esse officiis nam inventore excepturi dolores vero sapiente commodi est sunt ex ab illo modi illum, consectetur adipisci labore.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Blog
