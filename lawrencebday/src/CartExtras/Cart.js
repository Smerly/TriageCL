import React, { Component } from 'react';
import { DataContext } from './Context';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
class Cart extends Component {
	static contextType = DataContext;

	render() {
		const { cart, removeCart } = this.context;
		return (
			<div>
				<>
					{cart.map((item) => (
						// In here is what will be seeing inside the boxes of each product
						<div key={item._id}>
							<img src={item.src} alt="" />
							<div>
								<div>
									<h2>{item.title}</h2>
									<span>${item.price}</span>
									<p>
										{item.size.map((size, index) => (
											<button key={index}>{size}</button>
										))}
									</p>
								</div>
							</div>
							<div onClick={() => removeCart(item._id)}>X</div>
						</div>
					))}
					<div>
						<Router>
							<Link to="/payment"> Payment </Link>
						</Router>
						<h3>Total: 0</h3>
					</div>
				</>
			</div>
		);
	}
}

export default Cart;
