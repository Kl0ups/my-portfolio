import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>     
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src="" alt=""></img></a>
                <a href="#"><img src="" alt=""></img></a>
                <a href="#"><img src="" alt=""></img></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}