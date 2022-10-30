import Home from './components/Home';
import Header from './components/Header';
import './index.css';
import Basket from './components/Basket';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from './components/Register';
import UpdateProfile from './components/UpdateProfile';


function App() {


  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState("");
  const [localStorageItem, setLocalStorageItem] = useState([]);



  useEffect(() => {
    const totalPrice = basket.reduce((pre, basket) => pre + (basket.amount * basket.price), 0);
    setCost(totalPrice);



    localStorage.setItem("basket", JSON.stringify(basket));
    getItem();
















  }, [basket]);

  const getItem = () => {
    const localData = JSON.parse(localStorage.getItem("basket") ?? []);
    setLocalStorageItem(localData);


  }

  return (
    <>
      <Header />



      <Routes>
        <Route path='/' element={<Home basket={basket} setBasket={setBasket}></Home>}></Route>
        <Route path='basket' element={<Basket cost={cost} localStorageItem={localStorageItem} basket={basket} ></Basket>}></Route>
        <Route path='product-list' element={<ProductList basket={basket} setBasket={setBasket}></ProductList>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path='update-profile' element={<UpdateProfile></UpdateProfile>}></Route>
        
      </Routes>







    </>

  );
}

export default App;