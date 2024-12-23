import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/image1.webp';




function Main() {

  const[products, setProducts] = useState([])

  useEffect(() => {
  
    const api = 'http://127.0.0.1:9001/products'

    fetch(api)
    .then(result => result.json())
    .then((result) => {
      //console.log(result)
      setProducts(result.data)
    })
  

  }, [])

  return (
    <div className="Main">
       { products.map((item) =>  <Product key={item.id} header={item.header} image={image} price={item.price}/> )}  
    </div>
  );
}

export default Main;