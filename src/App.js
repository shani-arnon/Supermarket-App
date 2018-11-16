import React, { Component } from 'react'
import logo from './logo.svg'
// import './App.css'
import GlobalStyle from './GlobalStyles'

import Supermarket from './Supermarket'

class App extends Component {
  state = {
    store_name: "",
    store_width: 0,
    store_length: 0,
    tile_size: 0
  }

  componentDidMount() {
    fetch('/api/store')
      .then(data => data.json())
      .then(store => {
        this.setState({
          store_name: store.name,
          store_width: store.xLength,
          store_length: store.yLength,
          tile_size: window.innerWidth / store.xLength
        })
        console.log('store', store);

      })
  }
  render() {
    return (
      //Supermarket container
      <div>

        <Supermarket {...this.state} />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
