import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchList } from "./components/SearchList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchList results={results} />}
      </div>
    </div>
  );
}

export default App;
