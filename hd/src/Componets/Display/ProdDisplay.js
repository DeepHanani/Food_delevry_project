import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './Products.css'
import Header from '../../Header/Header';
import Background from '../Background/Background';
import { addItem } from '../action/ProdAction';
import Footer from '../Footer/Footer';
export default function ProdDisplay() {

    const prodData = useSelector(y=>y.product);

    console.log(prodData,"lllll")

   const dispatch =  useDispatch();

   const handalAddtocart = (value)=>{
    dispatch(addItem(value))
}
  return (
<>

  <div className='all'>
  <Header/>
  <Background/>
    <h1>- : Our  Exclusiv  Food : - </h1>
    <div className='main'>

    {
        prodData.data.map((value)=>{
           return( <div className="post-1">
                <img src={value.img} alt="" />
                <div className="part-1">
                  <div className="desc">
                    <p className="name">{value.title}</p>
                  </div>
                  <div className="pricies">
                  <p className="price">{value.price}Rs</p>
                </div>

                </div>
                <div className="part-2">
               
                  <div className="categorys">
                     
                    <button className='addtocartBtn' onClick={()=>{handalAddtocart(value)}}>Add to cart</button>
                  </div>
                  
                </div>
               
                <div className='last'>
                <p className="lorem"></p>

                </div>
               
              </div>
           )
        })
    }
      
    </div>

    </div>

    <Footer/>
    </>
  )
}
