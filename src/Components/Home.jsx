import { useState, useEffect } from "react";
import Stars from "./Stars";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Hello");
    fetch('https://my-json-server.typicode.com/devanshu935/e-commerce/items').then(res => res.json()).then(data => setProducts(data));
  }, []);

  return (
    <div className="home page">
      <h3>RapidRetail</h3>
      <div className="item-list">
        {products.map((product, id) => {
          return (
            <div className="item" key={id}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>Rs. {product.price}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '55px' }}>
                <p>{product.description}</p>
                <Stars count={product.rating} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="socials">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
          alt="ig"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
          alt="twitter"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
          alt="facebook"
        />
      </div>
    </div>
  );
};