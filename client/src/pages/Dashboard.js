import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../components/Header';
import Container from '../components/Container';
import PetCard from '../components/PetCard';
import AddBtn from '../components/AddBtn';

function Dashboard() {
    return (
        <div>
            <Header />
            <Container>
                <Row className='justify-content-center'>
                    <Col xs='auto'>
                        <PetCard />
                    </Col>
                    <Col xs='auto'>
                        <PetCard />
                    </Col>
                    <Col xs='auto'>
                        <PetCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddBtn />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;
