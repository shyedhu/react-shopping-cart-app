import React from 'react';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	render(){
		const { product } = this.props;
		return (
		    <div height="10" width="10" className="card" style={{ marginBottom: "5px"}}>
			  <div className="card-body">
				<img data-e2e="product-image" height="50" width="50" className="card-image" src={'/assets/images/'+product.image} 
     alt="logo"/>
			    <h4 data-e2e="product-name" className="card-title">{product.name}</h4>
			    <h5 data-e2e="product-price" className="card-text"><small>price: </small>${product.price}</h5>
			    <span data-e2e="available-quantity" className="card-text"><small>Available Quantity: </small>{product.available_quantity}</span>
			    
			    { product.available_quantity > 0 ?
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" data-e2e="addtocart-button" onClick={this.addToCart}>Add to cart</button>
			    		<input type="number" data-e2e="quantity" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> : 
			    	<p className="text-danger"> product is out of stock </p>
			 	}

			  </div>
			</div>
		)
	}
}
