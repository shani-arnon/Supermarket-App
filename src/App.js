import React, { Component } from 'react'


import GlobalStyle from './GlobalStyles'

import Supermarket from './Supermarket'

class App extends Component {
  state = {
    store_name: "",
    store_width: 0,
    store_length: 0,
    tile_size: 0,
    shelves: [],
    show_shelf_inventory: false,
    shelf_inventory: []
  }


  async componentDidMount() {
    let data = await fetch('/api/store')
    let store = await data.json()
    let result = await fetch('/api/shelves')
    let shelves = await result.json()

    this.setState({
      store_name: store.name,
      store_width: store.xLength,
      store_length: store.yLength,
      tile_size: window.innerWidth / store.xLength,
      shelves
    })
  }
  get_shelf_inventory = async (shelfNum) => {
    let data = await fetch(`/api/${shelfNum}/products`)
    let products = await data.json()
    this.setState({
      shelf_inventory: products,
      show_shelf_inventory: true
    })
  }
  render() {
    return (
      //Supermarket container
      <div>
        <Supermarket {...this.state} get_shelf_inventory={this.get_shelf_inventory} />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
