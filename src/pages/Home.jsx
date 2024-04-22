import React, { useState, useEffect } from "react";
import NewsFeed from "../components/NewsFeed";
import SearchBar from "../components/SearchBar";
import FilterOptions from "../components/FilterOptions";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../store/articleThunks";

const Home = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    date: "",
    category: "",
    source: "",
  });

  useEffect(() => {
    dispatch(fetchArticles({ query: searchQuery, filterOptions }));
    console.log("called");
  }, [filterOptions, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (option, value) => {
    setFilterOptions({ ...filterOptions, [option]: value });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onChange={handleFilterChange} />
      <NewsFeed articles={articles} />
    </div>
  );
};

export default Home;
