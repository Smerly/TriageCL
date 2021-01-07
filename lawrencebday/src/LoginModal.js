import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class LoginModal extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}
	handleModal() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<div className="nav-link">
				<button
					href="#"
					className="buttoncustom2 titlecustom nav-link mx-3 mr-5"
					style={{ borderRadius: 100 }}
					onClick={() => {
						this.handleModal();
					}}
				>
					Login
				</button>
				<Modal show={this.state.show} onHide={() => this.handleModal()}>
					<Modal.Header
						closeButton
						style={{ backgroundColor: '#E3A7FF', height: 170 }}
					></Modal.Header>
					<Modal.Body style={{ height: 350 }}></Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</div>
		);
	}
}
export default LoginModal;
