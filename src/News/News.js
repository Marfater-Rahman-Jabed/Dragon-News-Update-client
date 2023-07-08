import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { image_url, title, details, category_id } = news;
    console.log(news)
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Go This category News</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default News;