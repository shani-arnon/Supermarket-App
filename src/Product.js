import React from "react";
import styled from "styled-components";

const Product = ({ name, shelf, productNumber }) => {
    // console.log('name', name)
    // console.log('shelf', shelf)
    return (
        <productBox>
            <productName>Product Name: {name} </productName><br />
            <productData>Shelf No: {shelf}<br />
                Product No: {productNumber}
            </productData>
        </productBox>
    )
}
export default Product

const productBox = styled.div`
    background: oldlace;
`
const productName = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 4rem;
    margin-top: 1.5rem;
`
const productData = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    margin-top: 1.5rem;
`