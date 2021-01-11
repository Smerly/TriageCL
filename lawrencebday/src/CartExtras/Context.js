import React, { Component } from 'react';

export const DataContext = React.createContext();

// This is where the data for the products and API is made. Also where all the functions are written

class DataProvider extends Component {
	state = {
		products: [
			{
				_id: '1',
				title: 'shirt 01',
				img: '',
				size: ['S,', 'M', 'L', 'XL', 'XXL', 'XXXL'],
				price: 19,
			},

			{
				_id: '2',
				title: 'shirt 02',
				img: '',
				size: ['S,', 'M', 'L', 'XL', 'XXL', 'XXXL'],
				price: 19,
			},
		],
		cart: [],
	};

	removeCart = (id) => {
		const { cart } = this.state;
		cart.forEach((item, index) => {
			if (item._id === id) {
				cart.splice(index, 1);
			}
		});
		this.setState({ cart: cart });
	};

	addCart = (id) => {
		const { products, cart } = this.state;
		const check = cart.every((item) => {
			return item._id === id;
		});

		if (check) {
			const data = products.filter((product) => {
				return product._id === id;
			});
			this.setState({ cart: [...cart, ...data] });
			alert('The product has been added to the cart.');
		}
	};
	render() {
		const { products, cart } = this.state;
		const { addCart, removeCart } = this;
		return (
			<DataContext.Provider value={{ products, addCart, cart, removeCart }}>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}

export default DataProvider;
