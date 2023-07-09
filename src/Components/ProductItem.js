import React, {useState} from 'react';
import './ProductItem.css';
import Card from './Card';
import ProductDate from './ProductDate';

const ProductItem = (props) => {

const [title, setTitle] = useState(props.title);

  function buttonhandler(){
    console.log("button clicked");
    setTitle("Popcorn");

  }

    return (
        <Card className='product-item'>
          <ProductDate date={props.date} />
          <div className='product-item__description'>
            <h2>{title}</h2>
          </div>
          <button onClick={buttonhandler} >Add to cart</button>
          
        </Card>
      );
}
export default ProductItem;