import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // Only fetch if input is at least 2 characters long
    if (value.trim().length < 1) {
      setResults([]); // Clear results if input is too short
      return;
    }

    fetch("https://dpaste.com/79QXDY8TD.txt")
      .then((response) => response.json())
      .then((json) => {
        const searchTerm = value.toLowerCase();
        const results = json
          .map((item) => {
            const countryMatch = item.country && item.country.toLowerCase().startsWith(searchTerm);
            const capitalMatch = item.capital && item.capital.toLowerCase().startsWith(searchTerm);

            // Return result in the format `country - capital`
            if (countryMatch || capitalMatch) {
              return {
                country: item.country || "Unknown Country",
                capital: item.capital || "Unknown Capital",
              };
            }
            return null;
          })
          .filter(Boolean); // Remove null values
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]); // Clear results if there's an error
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search by country or capital..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
