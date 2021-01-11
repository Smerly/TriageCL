import React, { Component } from 'react';
import { DataContext } from './Context';
import { Link } from 'react-router-dom';
// This is what you will see when you click into the products

class Details extends Component {
	static contextType = DataContext;

	state = {
		product: [],
	};

	getProduct = () => {
		if (this.props.match.params.id) {
			const res = this.context.products;
			const data = res.filter((item) => {
				return item._id === this.props.match.params.id;
			});
			this.setState({ product: data });
		}
	};

	componentDidMount() {
		this.getProduct();
	}

	render() {
		console.log(this.context.products);
		const { product } = this.state;
		return (
			<>
				{product.map((item) => (
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
								<Link to="/cart">Add to Cart.</Link>
							</div>
						</div>
					</div>
				))}
			</>
		);
	}
}

export default Details;
