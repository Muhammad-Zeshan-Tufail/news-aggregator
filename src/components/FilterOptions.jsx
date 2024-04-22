import React, { useState } from "react";
import { formatDate } from "../utils/apiUtils";

const FilterOptions = ({ onChange }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");

  const handleFilterChange = (option, value) => {
    switch (option) {
      case "date":
        setDate(value);
        break;
      case "category":
        setCategory(value);
        // setSource('')
        break;
      case "source":
        setSource(value);
        // setCategory('')
        break;
      default:
        break;
    }
    onChange(option, value);
  };

  return (
    <div className="flex items-center mb-4 gap-4">
      <select
        value={source}
        onChange={(e) => handleFilterChange("source", e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="">All Sources</option>
        <option value="espn">ESPN</option>
        <option value="bbc-news">BBC News</option>
        <option value="cnn">CNN</option>
        <option value="abc-news">ABC News</option>
      </select>
      {/* <input
        type="date"
        value={date}
        onChange={(e) => {
          const formattedDate = formatDate(e.target.value);
          handleFilterChange("date", formattedDate);
        }}
        className="border border-gray-300 rounded-md px-4 py-2"
      /> */}
      <select
        value={category}
        onChange={(e) => {
          handleFilterChange("category", e.target.value);
        }}
        className="border border-gray-300 rounded-md px-4 py-2 mr-2"
      >
        <option value="">All Categories</option>
        <option value="business">business</option>
        <option value="entertainment">entertainment</option>
        <option value="general">general</option>
        <option value="health">health</option>
        <option value="science">science</option>
        <option value="sports">sports</option>
        <option value="technology">technology</option>

        {/* Add category filter options */}
      </select>
    </div>
  );
};

export default FilterOptions;
