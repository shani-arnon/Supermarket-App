import React from 'react'
import styled from 'styled-components'
// import { lighten, darken } from 'polished'

const Supermarket = ({ store_name, store_width, store_length, tile_size }) => {
    return (
        <StoreTiles columns={store_width} rows={store_length} size={tile_size}>
            {
                generate_grid(store_width * store_length, tile_size)
            }
            <ShelvesBox>
                <Shelf size={tile_size} />
            </ShelvesBox>
        </StoreTiles>
    )
}

const generate_grid = (tiles_count, tile_size) => {
    const tiles = []
    for (let i = 0; i < tiles_count; i++) {
        tiles.push(<Tile key={i} size={tile_size}>{i + 1}</Tile>)
    }
    return tiles;
}
const Shelf = styled.div`
    border: 2px solid cyan;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`
const ShelvesBox = styled.div`
    min-width:10rem;
    min-height:10rem;
    /* background-color:gold; */
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border:gold 2px solid;
`

const StoreTiles = styled.div`
    min-width:10rem;
    min-height:10rem;
    background-color:magenta;
    position:relative;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.columns}, ${props.size}px)`};
    /* grid-template-rows: ${props => props.rows}; */
`
const Tile = styled.div`
    border: 1px dashed;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Supermarket;