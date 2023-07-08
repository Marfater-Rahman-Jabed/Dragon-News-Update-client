import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { HiOutlineBookmark, HiShare } from "react-icons/hi";
import { FaEye, FaStar } from 'react-icons/fa';


const NewsCard = ({ category }) => {
    console.log(category);
    const { author, details, image_url, title, rating, total_view, _id } = category
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex '>
                        <Image className='me-2' src={author.img}
                            roundedCircle
                            style={{ height: 60 }}></Image>
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <HiOutlineBookmark></HiOutlineBookmark>
                        <HiShare></HiShare>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text className='mt-2'>
                        {details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>See more</Link></p> : <p></p>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div>
                        <FaStar className='me-2 text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;