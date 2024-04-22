import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article ,index }) => {
  const navigate = useNavigate()
  const hnadleNavigate = () =>{
navigate(`/article/${index}`,{state:article})
  }
  return (
    <div className="article-card bg-white rounded-lg p-4 shadow-md min-h-fit h-auto">
      <div className="h-40">
        <img
          className="w-full max-h-40 h-full"
          src={article?.urlToImage}
          alt="poster"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-ellipsis">
        {article?.title}
      </h3>
      <p className="text-gray-700 mb-2">
        {article?.description?.slice(0, 300) +
          (article?.description?.length > 200 ? "..." : "")}
      </p>
      <p className="text-gray-600 mb-1">Source: {article?.source?.name || article?.name}</p>
      <p className="text-gray-600 mb-1">Author: {article?.author}</p>
      <p className="text-gray-600 mb-2">Published At: {article?.publishedAt}</p>
      <button
           onClick={hnadleNavigate}

        className="text-blue-500 hover:underline"
      >
        Read more
      </button>
    </div>
  );
};

export default ArticleCard;
