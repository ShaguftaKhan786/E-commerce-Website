import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../context/Context";
import Footer from './Footer'

const Product = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <>
   <h1>Products</h1>
    <div className="home">    
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })} style={{margin:"10px"}}>
              Add to Cart
            </button>
            <button onClick={() => dispatch({ type: "Buy", payload: item })} style={{margin:"10px"}}>
             Buy Now
            </button>

            
          </div>
          
        );
      })}
    </div>
    <Footer/>
    </>
  );
};

export default Product;
