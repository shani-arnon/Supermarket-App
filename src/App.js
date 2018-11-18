import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import GlobalStyle from './GlobalStyles'
import Supermarket from './Supermarket'
import ProductsList from "./ProductsList"
import DATA from "../src/data/DATA.json"


class App extends Component {
  state = {
    store_name: "",
    store_width: 0,
    store_length: 0,
    tile_size: 0,
    shelves: [],
    shelf_inventory: [],
    products: DATA,
    show_shelf_inventory: false,
  }

  openModal = () => {
    this.setState({
      show_shelf_inventory: true
    })
  }
  closeModal = () => {
    this.setState({
      show_shelf_inventory: false
    })
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
    const { show_shelf_inventory } = this.state
    return (
      //Supermarket container
      <div>
        <Supermarket {...this.state} get_shelf_inventory={this.get_shelf_inventory} />
        <Modal open={show_shelf_inventory} onClose={this.closeModal} center>
          <h1>Products List</h1>
          <ProductsList products_list={this.state.shelf_inventory} />
        </Modal>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
