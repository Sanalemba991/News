
import Card from "./Card";
import { useState } from "react";

function News() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]); // Initialize as an empty array
  const API_KEY = "3e50066ea2654bd582fdfb43cc44855b";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json(); // Await the JSON conversion
      console.log(jsonData.articles);
      setNewsData(jsonData.articles); // Fix capitalization
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const Input = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div className="Som">
          <div className="trending-news">
            <h1>Trending </h1>
            <h1 className="Sal">News</h1>
          </div>

          <ul>
            <li className="sam">
              <a href="#">All News</a>
            </li>
            <li className="ram">
              <a href="#">Trending</a>
            </li>
          </ul>
          <div className="searchba">
            <input type="text" placeholder="Search" onChange={Input} />
            <button onClick={getData}>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <p className="head">Stay Updated</p>
      </div>
      <div className="category">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default News;
