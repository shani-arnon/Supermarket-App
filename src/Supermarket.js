import React from 'react'
import styled from 'styled-components'
// import { lighten, darken } from 'polished'

const Supermarket = ({ store_name, store_width, store_length, tile_size, shelves, get_shelf_inventory }) => {

    return (
        <>
            <Title>
                {`Welcome to ${store_name}!`}
            </Title>

            <StoreTiles columns={store_width} rows={store_length} size={tile_size}>
                {generate_grid(store_width * store_length, tile_size)}
                {generate_shelves(shelves, store_length, tile_size, get_shelf_inventory)}
            </StoreTiles>

        </>
    )

}

const generate_grid = (tiles_count, tile_size) => {
    const tiles = []
    for (let i = 0; i < tiles_count; i++) {
        tiles.push(<Tile key={i} size={tile_size}></Tile>) //{i + 1}
    }
    return tiles;
}

const generate_shelves = (shelves_data, store_length, tile_size, get_shelf_inventory) => {
    const shelves = [];
    for (let i = 0; i < shelves_data.length; i++) {
        const { xLength, yLength, coordinates, shelfNum } = shelves_data[i]
        const shelf_size = {
            top: store_length * tile_size - coordinates.y * tile_size - yLength * tile_size,
            left: coordinates.x * tile_size,
            width: xLength * tile_size,
            height: yLength * tile_size,
            shelfNum
        }
        console.log('shelf_size', shelf_size);
        shelves.push(<Shelf key={i} {...shelf_size} onClick={() => get_shelf_inventory(shelfNum)} >{shelfNum} </Shelf>)
    }
    return shelves;
}

export const Shelf = styled.div`
    position:absolute;
    top: ${p => p.top}px;
    left: ${p => p.left}px;
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    font-size: 35px;
    background-color: yellow;
    cursor: pointer;
`
const StoreTiles = styled.div`
    position: relative;
    display: grid ;
    grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
    
`
const Tile = styled.div`
    border: 1px dashed lightslategray;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
 	font-family: Arial, Helvetica, sans-serif;
	font-size: 6rem;
	font-weight: 700;
	color: black;
	text-align: center;
`

export default Supermarket;