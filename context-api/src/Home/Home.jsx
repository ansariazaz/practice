import { Link } from "react-router-dom";

const Home = ({ products }) => {
  console.log(products);
  return (
    <div className="homePage">
      <h2 className="head">Welcome to Home Page</h2>
      <div className="products">
        {products.map((item) => (
          <Link key={item.id} to={`products/${item.id}`} className="product">
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <div className="more-product">
        <Link to={"/products"} className="more">See More product</Link>
      </div>
    </div>
  );
};

export default Home;
