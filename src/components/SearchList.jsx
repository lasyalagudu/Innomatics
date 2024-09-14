import "./SearchList.css";
import { Search } from "./Search";

export const SearchList = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="no-results">No results found.</p>; // Handle empty or null results
  }

  return (
    <div className="results-list">
      {results.map((result) => {
        // Make sure each result object has the required fields, otherwise fallback
        return (
          <Search
            key={result.country} // Use the country as a unique key
            result={result}
          />
        );
      })}
    </div>
  );
};
