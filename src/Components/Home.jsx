import { useState, useEffect } from "react";
import Stars from "./Stars";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() =>
    fetchProducts(), []);

  function fetchProducts() {
    fetch('https://my-json-server.typicode.com/devanshu935/e-commerce/items').then(res => res.json()).then(data => setProducts(data));
  }

  function handleSortClick() {
    if (!sorted) {
      const sortedProducts = JSON.parse(JSON.stringify(products)).sort((a, b) => a.price - b.price);
      setSorted(true);
      setProducts(sortedProducts);
      return;
    }
    setSorted(false);
    fetchProducts();
  }

  function handleEditClick(id) {
    setEditIndex(id);
  }

  function handleDeleteClick(id) {
    let filteredProducts = products.filter(product => product.id !== id);
    setProducts(filteredProducts);
  }

  function handleDataChange(e) {
    setProducts(products.map(product => {
      if (product.id !== editIndex) return product;
      return {
        ...product,
        [e.target.name]: e.target.value,
      }
    }));
  }

  function handleSaveClick() {
    let item = products.filter(product => product.id === editIndex);
    setProducts(products.map(product => {
      if (product.id === item.id) return item;
      return product;
    }));
    setEditIndex(null);
  }

  return (
    <div className="home page">
      <h3>RapidRetail</h3>
      <div className="item-list">
        <button style={{ width: '100px' }} onClick={handleSortClick}>Sort</button>
        {products.map((product, id) => {
          return (
            <div className="item" key={id}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={product.image} alt={product.name} />
                {editIndex === product.id ? <input name="name" onChange={(e) => handleDataChange(e)} value={product.name} /> : <h4>{product.name}</h4>}
                {editIndex === product.id ? <input name="price" onChange={(e) => handleDataChange(e)} value={product.price} /> : <p>Rs. {product.price}</p>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '55px' }}>
                {editIndex === product.id ? <textarea onChange={(e) => handleDataChange(e)} style={{ width: '900px', height: '50px' }} name="description" value={product.description} /> : <p>{product.description}</p>}
                {editIndex === product.id ?
                  <label>Rating &nbsp;
                    <input name="rating" value={product.rating} type="number" min={0} max={5} onChange={(e) => handleDataChange(e)}></input>
                  </label> : <Stars count={product.rating} />}
              </div>
              {editIndex === product.id ? <button onClick={() => setEditIndex(null)}>Cancel</button> : <img
                className="edit"
                alt="edit"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png"
                onClick={() => handleEditClick(product.id)} />}
              {editIndex === product.id ? <button onClick={handleSaveClick}>Save</button> : <img
                className="bin"
                alt="delete"
                src="https://cdn-icons-png.flaticon.com/128/484/484662.png"
                onClick={() => handleDeleteClick(product.id)} />}
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