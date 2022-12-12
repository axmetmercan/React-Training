import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col, } from 'reactstrap';
import React, { Component } from 'react';
import alertify from 'alertifyjs';
import { Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCategory: "", products: [], cart: [] };

    // this.removeFromCart = this.removeFromCart.bind(this); 
  }

  // titleProduct = "Product List";
  // titleCategory = "Category List";
  // state={currentCategory:""}
  componentDidMount = () => {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }


  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    url = url + "/?categoryId=" + categoryId;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  addToCart = (product) => {
    let newCart = this.state.cart;

    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;

    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    alertify.success(product.productName + " added to cart.");
  }

  removeFromCart = (product) => {

    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " has removed from cart.");
  }

  render() {

    let productTitle = { title: "Product List1", definition: "Product Definition" }
    let categoryTitle = { title: "Category Title", definition: "Category Definition" }

    return (
      <div className="App">
        <Container>
          <Row>

            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          </Row>
          <Row>
            <Col xs="3">
              <CategoryList curentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryTitle} />
            </Col>

            <Col xs="9">

              <Routes>

                <Route
                  exact path="/"
                  element={
                    <ProductList addToCart={this.addToCart}
                      products={this.state.products}
                      curentCategory={this.state.currentCategory}
                      changeCategory={this.changeCategory}
                      info={productTitle}
                    />
                  }
                />
                <Route exact path="/cart" element={
                  <CartList addToCart={this.addToCart}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                  }
                />

                
                <Route exact path="/form1" element={<FormDemo1/>} ></Route>
                <Route exact path="/form" element={<FormDemo2/>}></Route>
                <Route exact path="*" element={<NotFound />} ></Route>



              </Routes>


            </Col>


          </Row>


        </Container>


        <h3>Hello From React!!!</h3>
      </div>




    );
  }
}


// function App() {

//   let titleProduct="Product List";
//   let titleCategory="Category List";


//   return (

//   );
// }

// export default App;
