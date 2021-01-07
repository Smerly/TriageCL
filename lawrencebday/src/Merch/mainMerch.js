import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Navbar2';
import MerchItems from './MerchItems';
function MerchMain() {
	return (
		<div>
			<Navbar2 />
			<MerchItems />
		</div>
	);
}

export default MerchMain;
