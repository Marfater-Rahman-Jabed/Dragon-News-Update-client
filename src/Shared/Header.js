import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import LeftSideNav from './LeftSideNav';
import Login from './Login/Login/Login';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All Categories</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link >

                                {
                                    user?.uid ?
                                        <span>
                                            {user?.displayName}
                                            <Button onClick={handleLogOut} variant="light"> LogOut
                                            </Button>
                                        </span> :
                                        <span>
                                            <Link to='/login' className='me-2 '>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </span>

                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Image
                                    roundedCircle style={{ height: '30px' }}
                                    src={user?.photoURL ? user.photoURL : <FaUser></FaUser>}
                                ></Image>
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;