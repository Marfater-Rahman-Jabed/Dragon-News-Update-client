import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard';
import useTitle from '../../useTitle';

const Home = () => {
    const AllNews = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h1>This is home component: {AllNews.length}</h1>
            {
                AllNews.map(category => <NewsCard
                    key={category._id}
                    category={category}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;