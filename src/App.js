import React, { useEffect, useState } from "react";
// import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let person = {
    name: "Raju Talukder",
    job: "Operaio",
  };
  let style = {
    color: "red",
    backgroundColor: " yellow",
  };
  const nayoks = ["Anower", "Razzak", "HEllo", "Salman Sah", "Rajib"];
  const products = [
    {
      name: "Photoshop",
      price: "$90.99",
    },
    {
      name: "Illustrator",
      price: "$60.99",
    },
    {
      name: "PDF Reader",
      price: "$30.99",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "#333",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3> {name} </h3>
      <h5> {price} </h5>
      <button> Buy Now </button>
    </div>
  );
}

export default App;
