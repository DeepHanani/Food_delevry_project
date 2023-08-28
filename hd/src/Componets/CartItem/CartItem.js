import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DecItem, IncItem, RemoveItem } from '../action/ProdAction';
import './CartItem.css'
import Header from '../../Header/Header';

export default function CartItem() {
    const cartItem =  useSelector(y=>y.product.cart);

   console.log(cartItem ,"hhhhhh");

   const dispatch = useDispatch();

   const dicCount = (value)=>{
    if(value.count>0){
        dispatch(DecItem(value))
    }

}


const incCount = (value)=>{

dispatch(IncItem(value))
}

const removeItem = (value)=>{
      dispatch(RemoveItem(value));
}

 let add ;
if(cartItem.length == 0){
   add = "- : No Added cart item : -"
}

  return (
    <>
    <Header/>
    <div className='privat'>
    
    <div className='cartContainer'>
    {
        cartItem.map((value)=>{

           
            

            return(
                <div className='miniContainer'>
                <div className='cartImgDiv'>
                <img src={value.item.img}/>
                </div>
                <div className='contantDiv'>

                <div className='titleDiv'>
                <h3>{value.item.title}</h3>
                </div>
                <div className='btnContainer'>
                <button className='decBtn' onClick={()=>dicCount(value)}>-</button>
                <span>{value.count}</span>
                <button  className='plusBtn' onClick={()=>incCount(value)}>+</button>
                <button className='removeBtn' onClick={()=>removeItem(value)}>Remove</button>
                
                </div>
                <div>
                <h3>Price : {value.count * value.item.price} Rs</h3>
                </div>
      
                </div>
                </div>
                
            )

        })
    }

    </div>

    <h1 className='errorMes'>{add}</h1>
    </div>
   
    </>
  )
}
