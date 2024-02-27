import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

function Header() {
    return (
        < >
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-dark fw-bolder' style={{ fontSize: '25px' }}>CRISTIANO RONALDO</Navbar.Brand>
                    <Nav className=" container justify-content-evenly">
                        <Nav.Link href="#home" className='fw-bolder'>CR7</Nav.Link>
                        <Nav.Link href="#features" className='fw-bolder'>BRANDS </Nav.Link>
                        <Nav.Link href="#pricing" className='fw-bolder'>PRICE</Nav.Link>
                        <Nav.Link href="#pricing" className='fw-bolder'>SALES</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header