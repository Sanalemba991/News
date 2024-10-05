
import Card from "./Card";
import { useEffect, useState } from "react";

function News() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]); 
  const API_KEY = "3e50066ea2654bd582fdfb43cc44855b";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json(); 
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
useEffect(()=>{
  getData()
},[])

  const Input = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const Knput=(e)=>{

    setSearch(event.target.value);
    
  }

  return (
    <div>
      <nav>
        <div className="Som">
          <div className="trending-news">
            <h1>Sana </h1>
            <h1 className="Sal">News</h1>
          </div>

          <ul>
            <li className="sam">
              <a className="lp" href="#">All News</a>
            </li>
            <li className="ram">
              <a className="lp" href="#">Trending</a>
            </li>
          </ul>
          <div className="searchba">
            <input type="text" placeholder="Search" value={search} onChange={Input} />
            <button onClick={getData}>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <p className="head">Fell Free To Sreach Me</p>
      </div>
      <div className="category">
        <button onClick={Knput} value="sports">Sports</button>
        <button onClick={Knput} value="politics">Politics</button>
        <button onClick={Knput} value="entertainment">Entertainment</button>
        <button onClick={Knput} value="health">Health</button>
        <button onClick={Knput} value="fitness">Fitness</button>
      </div>
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default News;
