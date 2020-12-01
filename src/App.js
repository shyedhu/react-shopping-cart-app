import React, { Component } from 'react';
import Login from './components/Login';
import Products from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { isAuthenticated } from './repository';


class App extends Component {

  logOut(){
    localStorage.removeItem('x-access-token');
  }
  
  render() {
    const auth = isAuthenticated();
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
            
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  { (auth) ? <Link data-e2e="checkout-link" className="nav-item nav-link" to="/checkout">Checkout</Link>: ''}
                  {
                    ( auth ) ? 
                      ( <a data-e2e="logout-link" className="nav-item nav-link" href="/" onClick={this.logOut}>Log out</a>) : 
                      ( <Link data-e2e="login-link"  className="nav-item nav-link float-right" to="/login">Log In</Link> )
                   }
                      <Link data-e2e="shopping-link" className="nav-item nav-link" to="/">Shopping</Link>
                  <Link data-e2e="products-link" className="nav-item nav-link" to="/"><img data-e2e="products-image" height="25" width="50" className="product-images" src={'/assets/images/fruites.png'} alt="logo"/></Link>
                  <Link className="nav-item nav-link" to="/cart"><img data-e2e="cart-image" height="25" width="50" className="card-images" src={'/assets/images/cart.png'} alt="logo"/></Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <br/>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
