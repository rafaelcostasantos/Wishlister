import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Product from "./List/Product";

class App extends Component {
  state = {
    menuShow: false,
    products: [],
    text: "",
    priceT: ""
  };

  //METHODS
  showMenu = () => {
    const showOrNot = this.state.menuShow;
    this.setState({ menuShow: !showOrNot });
  };

  addProduct = () => {
    const nameVal = this.state.text;
    const priceProd = this.state.priceT;
    let currentList = [];
    if (this.state.products.length === 0) {
      currentList = this.state.products.slice();
    }
    currentList = [
      ...this.state.products,
      { name: nameVal, priceProd: priceProd }
    ];

    this.setState({
      products: currentList
    });
  };

  changeValueText = event => {
    const newText = event.target.value;
    this.setState({
      text: newText
    });
  };

  changeValuePrice = event => {
    const newText = event.target.value;
    this.setState({
      priceT: newText
    });
  };

  //RENDER CODE
  render() {
    const style = {
      maxWidth: "50px",
      position: "absolute"
    };
    let products = null;

    products = (
      <div>
        {this.state.products.map(product => {
          return <Product name={product.name} price={product.priceProd} />;
        })}
      </div>
    );

    let show = null;
    if (this.state.menuShow) {
      show = (
        <div style={style}>
          <p />
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.showMenu}>Mom</button>
        {show}
        <div className="textBoxes">
          <input
            onChange={this.changeValueText.bind(this)}
            size="30"
            type="text"
          />
          <input onChange={this.changeValuePrice.bind(this)} type="text" />
          <button onClick={() => this.addProduct()}>Submit</button>
          {products}
        </div>
      </div>
    );
  }
}

export default App;
