import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import merchtitle from '../images/merchtitle.png';

function MerchItems() {
	return (
		// #1
		<div className="column">
			<div className="row" style={{ backgroundColor: 'white', minHeight: 600 }}>
				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>

				<div className="col-md column p-5 mt-5">
					<h1 className="titlecustom" style={{ fontSize: '4vw' }}>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom2">Add to Cart</button>
					</form>
				</div>
			</div>

			<div
				className="row"
				style={{ backgroundColor: '#E3A7FF', minHeight: 600 }}
			>
				<div className="col-md column p-5 ml-5" style={{ marginTop: 100 }}>
					<h1
						className="titlecustom"
						style={{ color: 'white', fontSize: '4vw' }}
					>
						{' '}
						Triage Reverse Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						Just like the original, but the base color of the t-shirt is purple
						and the logo is white
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom" style={{ color: '#E3A7FF' }}>
							Add to Cart
						</button>
					</form>
				</div>

				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>
			</div>

			<div className="row" style={{ backgroundColor: 'white', minHeight: 600 }}>
				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>

				<div className="col-md column p-5 mt-5">
					<h1 className="titlecustom" style={{ fontSize: '4vw' }}>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom2">Add to Cart</button>
					</form>
				</div>
			</div>

			<div
				className="row"
				style={{ backgroundColor: '#E3A7FF', minHeight: 600 }}
			>
				<div className="col-md column p-5 ml-5" style={{ marginTop: 100 }}>
					<h1
						className="titlecustom"
						style={{ color: 'white', fontSize: '4vw' }}
					>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom" style={{ color: '#E3A7FF' }}>
							Add to Cart
						</button>
					</form>
				</div>

				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>
			</div>

			<div className="row" style={{ backgroundColor: 'white', minHeight: 600 }}>
				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>

				<div className="col-md column p-5 mt-5">
					<h1 className="titlecustom" style={{ fontSize: '4vw' }}>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom2">Add to Cart</button>
					</form>
				</div>
			</div>

			<div
				className="row"
				style={{ backgroundColor: '#E3A7FF', minHeight: 600 }}
			>
				<div className="col-md column p-5 ml-5" style={{ marginTop: 100 }}>
					<h1
						className="titlecustom"
						style={{ color: 'white', fontSize: '4vw' }}
					>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom" style={{ color: '#E3A7FF' }}>
							Add to Cart
						</button>
					</form>
				</div>

				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>
			</div>

			<div className="row" style={{ backgroundColor: 'white', minHeight: 600 }}>
				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>

				<div className="col-md column p-5 mt-5">
					<h1 className="titlecustom" style={{ fontSize: '4vw' }}>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom2">Add to Cart</button>
					</form>
				</div>
			</div>

			<div
				className="row"
				style={{ backgroundColor: '#E3A7FF', minHeight: 600 }}
			>
				<div className="col-md column p-5 ml-5" style={{ marginTop: 100 }}>
					<h1
						className="titlecustom"
						style={{ color: 'white', fontSize: '4vw' }}
					>
						{' '}
						Triage Standard Tee{' '}
					</h1>
					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
							marginBottom: 100,
						}}
					>
						{' '}
						The original, a standard white t-shirt with your favorite coffee
						roasters' logo.
					</header>

					<header
						className="roboto"
						style={{
							fontWeight: 100,
							fontSize: '1vw',
							marginTop: -15,
						}}
					>
						{' '}
						$29.99
					</header>
					<form style={{ display: 'flex', flexDirection: 'column' }}>
						<label for="size" className="triage" style={{ marginBottom: -3 }}>
							Choose your size
						</label>
						<select
							name="size"
							id="size"
							style={{ borderRadius: 5, marginBottom: 15, width: 100 }}
						>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<button className="buttoncustom" style={{ color: '#E3A7FF' }}>
							Add to Cart
						</button>
					</form>
				</div>

				<div className="col-md d-flex justify-content-center p-5">
					<img
						src={merchtitle}
						alt="item placeholder #1"
						style={{ height: '60vh' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default MerchItems;
