import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]); // kono API data load korer jonno amra state use kori.

    // outside thke data load korer jonno side effct hisebe amra useEffect use kori
    useEffect(() => {
        fetch('https://the-dragon-news-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>All Category: {categories.length}</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;