import "./Search.css";

export const Search = ({ result }) => {
  const { country, capital, population, official_language, currency } = result;

  return (
    <div className="search-result" onClick={() => alert(`You selected ${country}`)}>
      <h3>{country} - {capital}</h3>
      
    </div>
  );
};
