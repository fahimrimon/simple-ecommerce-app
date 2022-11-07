import React from 'react';
import {AllProductsApi} from '../../apiComponents/AllProductsApi';
import Product from './Product';
const Products = () => {
    return (
        <div className='p-5 flex flex-wrap'>
      {
          AllProductsApi.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>
    );
};

export default Products;