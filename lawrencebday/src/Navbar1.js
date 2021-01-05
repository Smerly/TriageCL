import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<section>
				<nav className="navbarcustom navbar">
					<div className="column text-center">
						<NavLink
							to={`/`}
							className="logolink1 font-weight-bold navbar-brand ml-3 mb-2"
						></NavLink>

						<h5 className="triage" style={{ marginTop: -10 }}>
							{' '}
							TRIAGE{' '}
						</h5>
						<header className="triage" style={{ marginTop: -15, fontSize: 9 }}>
							{' '}
							Coffee Roasters{' '}
						</header>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<ul className="nav-item pl-2"></ul>

					<ul className="navbar-nav">
						<div className="row">
							<li className="nav-item pl-2">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`beans`}
									className="customlink nav-link mx-4"
								>
									Coffee
								</NavLink>
							</li>

							<li className="nav-item pl-2">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`merch`}
									className="customlink nav-link mx-4"
								>
									Merch
								</NavLink>
							</li>

							<li className="nav-item pl-2">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`our`}
									className="customlink nav-link mx-4"
								>
									Locations
								</NavLink>
							</li>

							<li className="nav-item pl-2">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`login`}
									className="customlink nav-link mx-3 mr-5"
								>
									Login
								</NavLink>
							</li>

							<li className="nav-item pl-2">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`cart`}
									className="customlink carticon nav-link mx-3 mr-5"
								></NavLink>
							</li>
						</div>
					</ul>
				</nav>
			</section>
		</div>
	);
}

export default Navbar;
