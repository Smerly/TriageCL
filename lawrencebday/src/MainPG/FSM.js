import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../images/mainpurple.png';
function FSM() {
	return (
		<div>
			<div
				className="beanbg1 column d-flex align-items-center background"
				style={{
					backgroundImage: `url(${bg1})`,
					height: '100vh',
					width: 1700,
					objectFit: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}
			>
				<div className="container py-5">
					<h1 className="customh1 col-md" style={{ color: 'white' }}>
						Fresh on Site,
					</h1>
					<h1 className="customh1 col-md" style={{ color: 'white' }}>
						Scientifically Roasted,
					</h1>
					<h1 className="customh1 col-md" style={{ color: 'white' }}>
						Made Just for You.
					</h1>

					<button
						className="titlecustom mt-5 buttoncustom col-md"
						style={{ borderRadius: 300, width: 250, height: 80 }}
					>
						{' '}
						<h2 className="pt-2"> Shop Here </h2>
					</button>
				</div>
			</div>
		</div>
	);
}

export default FSM;
