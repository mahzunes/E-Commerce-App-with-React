import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa"
import { MdRoom } from "react-icons/md";
import { FiPhoneForwarded } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import { useSelector } from 'react-redux';

function Home({ basket, setBasket }) {




   





    const [query,setQuery]=useState("");

function onChange(e){
    setQuery(e.target.value);
    


    
}

const inputHandle=()=>{
    localStorage.setItem("email", JSON.stringify(query));
    setQuery("");


}






    return (





        <div className='homeContainer'>
            <div className='homeDesc'>
            <marquee>SUPER DEAL ! Free shipping over 50 dollars</marquee> 
            </div>


            <div className='newSletter'>
                <h1>Newsletter</h1>
                <div className='sletterDesc'>
                    Get timely updates from your  favorite products.
                </div>
                <div className='sletterInput'>
                    <input  onChange={onChange} value={query}   id="input"  placeholder='Your email'></input>
                    <button onClick={inputHandle}>
                        Send
                    </button>
                </div>


            </div>


            <div className='procutList'>

                <p>Our unique products are in our store for you</p>

                <div className='linkProduct'>
                    <Link to="/product-list"><h1>Click here to see our products</h1></Link>

                </div>


            </div>


            <div className='footerContainer'>
                <div className='left'>
                    <h1 className='leftTitle'>Shoe Store</h1>
                    <p className='leftDesc'>There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.</p>
                    <div className='socialiconContainer'>
                        <div className='socialIcon'>
                            <a className='facebook' href='https://www.facebook.com'>
                            <AiFillFacebook></AiFillFacebook>
                            </a>
                        </div>
                        
                        <div className='socialIcon'>
                        <a className='twitter' href='https://www.twitter.com'>
                        <BsTwitter></BsTwitter>

                        </a>
                        </div>
                        <div className='socialIcon' >
                            <a className='youtube' href='https://www.youtube.com'>
                            <AiFillYoutube></AiFillYoutube>
                            </a>
                        </div>
                        <div className='socialIcon'>
                            <a  className='pinterest' href='https://www.pinterest.com'>
                            <FaPinterestSquare></FaPinterestSquare>
                            </a>
                           
                        </div>





                    </div>

                </div>



                <div className='center'>
                    <h1 className='centerTitle'>Our Services</h1>
                    <ul className='List'>
                        <li className='ListItem'>Man Fashion</li>
                        <li className='ListItem'>Woman Fashion</li>
                        <li className='ListItem'>Accessories</li>
                        <li className='ListItem'>Children's Fashion</li>
                        <li className='ListItem'>Shoe</li>
                        <li className='ListItem'>Special Designs</li>

                    </ul>
                </div>



                <div className='right'>
                    <h1 className='contactTitle'>Contact</h1>
                    <div className='ContactItem '><MdRoom></MdRoom>  622 Dixie Path , South Tobinchester 98336</div>
                    <div className='ContactItem '><FiPhoneForwarded></FiPhoneForwarded>   +1 234 56 78</div>
                    <div className='ContactItem '> <AiFillMail></AiFillMail>contact@shoesstore.com</div>
                    <img className='payment' src='https://i.ibb.co/Qfvn4z6/payment.png'></img>


                </div>
            </div>




































        </div>
    )
}

export default Home
