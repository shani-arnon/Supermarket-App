import React from "react";
import styled from "styled-components";
import Product from './Product';



const create_title = (shelfNum) => {
    return (
        <h1>{`Products List Shelf No: ${shelfNum}`}</h1>
    )

}

const create_ui = products => products.map((product, i) => (
    <ListItem key={i}>
        <Product {...product} />
    </ListItem>
))
const ProductsList = ({ products_list }) => {
    return (
        <>
            <ListBox>
                <Title>{products_list.length && create_title(products_list[0].shelf)}</Title>
                <ul>{create_ui(products_list)}</ul>
            </ListBox>
        </>
    )
}

export default ProductsList

const ListBox = styled.div`
    height: 80vh;
    min-width: 70rem;
    border-radius: 0.4rem;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 2rem;
    box-shadow: 0 0.2rem 0.8rem DimGrey;
`
const ListItem = styled.li`
    list-style: none;
    background: red;
    &:nth-child(even){
        background: white
    };
    &:nth-child(odd){
        background: lightpink
    };
    &:hover{
        background: yellow;
        font-size: 3.5rem;
    }
    
`
const Title = styled.div`
    font-family: -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
`
