import React from 'react';

const NewsSummaryCard = ({ news }) => {
    return (
        <div>
            <h2>{news.title}</h2>
        </div>
    );
};

export default NewsSummaryCard;