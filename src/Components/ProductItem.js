import React from 'react';
import './ProductItem.css';
import Card from './Card';
import ProductDate from './ProductDate';

const ProductItem = (props) => {

  function buttonhandler(){
    console.log("button clicked")
  }

    return (
        <Card className='product-item'>
          <ProductDate date={props.date} />
          <div className='product-item__description'>
            <h2>{props.title}</h2>
          </div>
          <button onClick={buttonhandler} >Add to cart</button>
          
        </Card>
      );
}
export default ProductItem;