import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaWhatsapp, FaFacebookMessenger, FaSkype } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/images/img1.png'
import img2 from '../Assets/images/img2.png'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const RightSideNav = () => {
    const { providerLogin, LogOut } = useContext(AuthContext);

    const handleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleLogin} variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h4>Find on us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaFacebookMessenger></FaFacebookMessenger> Messanger</ListGroup.Item>
                    <ListGroup.Item><FaSkype></FaSkype> Skype</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                <h4>Brands (ads)</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={img1}
                            alt="First slide"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;