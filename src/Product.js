import React from "react";
import styled from "styled-components";

const Product = ({ name, productNumber }) => {
    // console.log('name', name)
    // console.log('shelf', shelf)
    return (
        <>
            <ProductBox>
                <ProductName>{name}</ProductName>
                <ProductData>
                    Product No: {productNumber}
                </ProductData>
            </ProductBox>
        </>
    )
}
export default Product

const ProductBox = styled.div`
    padding-bottom: 1.5rem;
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`
const ProductName = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
`

const ProductData = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
`
