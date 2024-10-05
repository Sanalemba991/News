const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      {data.map((curItem, index) => (
        <div className="card" key={index}>
          <img src={curItem.urlToImage} alt={curItem.title} />
          <div className="cardContent">
            <a href="#">{curItem.title}</a>
            <p>{curItem.description}</p>
            <button>Read more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
