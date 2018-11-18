import React from "react";
import Product from './Product'
import styled from "styled-components";


const create_ui = products => products.map(product => (
    <li className="product-item" key={product.id}>
        <Product {...product} />
    </li>
))
const ProductsList = ({ products_list }) => {
    return (
        <List>
            <ul>{create_ui(products_list)}</ul>
        </List>
    )
}


export default ProductsList


const List = styled.div`
    list-style: none;
    height: 70vh;
    min-width: 50rem;
    border-radius: 0.4rem;
    overflow-x: hidden;
    overflow-y: scroll;
    background: snow;
    padding: 2rem
    
`