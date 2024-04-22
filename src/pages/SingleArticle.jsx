import React from "react";
import { useLocation } from 'react-router-dom';


const SingleArticle = () => {
    const location = useLocation();
  const  article  = location.state;
console.log(article)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      <div>
        <img src={article?.urlToImage} alt="poster" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-ellipsis">
          {article?.title}
        </h3>
        <p className="text-gray-700 mb-2">{article?.description}</p>
        <p className="text-gray-600 mb-1">
          Source: {article?.source?.name || article?.name}
        </p>
        <p className="text-gray-600 mb-1">Author: {article?.author}</p>
        <p className="text-gray-600 mb-2">
          Published At: {article?.publishedAt}
        </p>
      </div>
    </div>
  );
};

export default SingleArticle;
