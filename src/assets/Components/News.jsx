import Card from "./Card";

function News() {
    
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
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update</p>
      </div>
      <div className="category">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default News;
