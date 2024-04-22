import React from 'react';
import ArticleCard from './ArticleCard';

const NewsFeed = ({ articles }) => {
  return (
    <div className="news-feed grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles && articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  );
};

export default NewsFeed;
