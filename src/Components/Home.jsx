import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('src/db.json')
  }, []);

  return (
    <div className="home page">
      <h3>RapidRetail</h3>
      <div>
        { products.map((product, id) => {
          return {

          }
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