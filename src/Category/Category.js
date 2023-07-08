import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard';
import useTitle from '../useTitle';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('Category');
    return (
        <div>
            <h1>This is category page : {categoryNews.length}</h1>
            {
                categoryNews.map(category => <NewsCard
                    key={category._id}
                    category={category}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;