import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Pobitro Raj",
    job: "JavaScript Developer"
  }

  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }

  const products = [
    { name: 'Laptop', price: '$699' },
    { name: 'iPhone', price: '$399' },
    { name: 'DSLR', price: '$512' },
  ]

  const friends = ['Sumon ', 'Nipun ', 'Sarowar ', 'Prince', 'hasu']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2 className="" style={style}>Heading: {person.name}</h2>
        <h3 style={{ backgroundColor: 'tomato' }}>Job: {person.job}</h3>

        <Something name="Pobitro Raj" pro="JavaScript Programmer"></Something>
        <Something></Something>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <ul>
          {
            friends.map(frd => <li>{frd}</li>)
          }
        </ul>
        <div>
          {
            friends.map(fr => <Friends name={fr}></Friends>)
          }
        </div>
        <Friends name={friends}></Friends>
        <Counter></Counter>

        <Users></Users>

      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  })
  return (
    <div className="" style={{ border: '1px solid tomato', padding: '10px', float: 'left' }}>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(12);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div style={{ marginBottom: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


function Friends(props) {
  return (
    <div className="" style={{ border: '1px solid yellow', float: 'left', margin: '5px', padding: '10px' }}>
      <h2>{props.name}</h2>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    color: 'yellow',
    backgroundColor: 'black',
    padding: '10px',
    boxShadow: '5px 5px 10px gray',
    marginBottom: '20px'
  }

  const { name, price } = props.product;

  return (
    <div className="" style={productStyle}>
      <h2>Product Name: {name}</h2>
      <h1>Product Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Something(props) {
  const somethingStyle = {
    color: 'blue',
    backgroundColor: 'yellow'
  }
  return (
    < div style={{ border: '2px solid yellow', margin: '10px' }} >
      <h1>Name: {props.name}</h1>
      <h2>Profession: {props.pro}</h2>
    </div >
  )
}

export default App;
