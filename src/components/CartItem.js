import React from 'react';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	render(){
		const { product } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
				<img data-e2e="product-image" height="50" width="50" className="card-image" src={'/assets/images/'+product.image} 
     alt="logo"/>
			    <h5 data-e2e="price" className="card-text"><small>price: </small>${product.price}</h5>
			    <span data-e2e="quantity" className="card-text text-success"><small>Quantity: </small>{product.qty}</span>
			    
			    <button data-e2e="remove-cart-button" className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(product)}>Remove from cart</button>

			  </div>
			</div>
		)
	}
}
