import React from 'react';
import './ProductDate.css';

const ProductDate = (props) => {
    const month = props.date;
    const day = props.date;
    const year = props.date;
  
    return (
      <div className='product-date'>
        <div className='product-date__month'>{month}</div>
        <div className='product-date__year'>{year}</div>
        <div className='product-date__day'>{day}</div>
      </div>
    );
  };

  export default ProductDate;
