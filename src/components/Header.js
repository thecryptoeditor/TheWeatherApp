import React from 'react';
import { Link } from 'react-router-dom'

export const Header = (props) => {

	let [text, setText] = React.useState("Weather App")

	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(223, 239, 247)"}}>
			<div className="container">
		    	<a className="navbar-brand" href="/home">{text}</a>
		    	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
		      		<span className="navbar-toggler-icon"></span>
		    	</button>

		    	<div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
		      		<ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
		        		<li className="nav-item">
		          			<Link className="nav-link active" aria-current="page" to="/news" onClick={ () => {setText("News App")}}>Tech News</Link>
		        		</li>
		        		<li className="nav-item">
		          			<Link className="nav-link active" aria-current="page" to="/info" onClick={ ()=> {setText("Contact Us")}}>Contact Us</Link>
		        		</li>
		      		</ul>
				</div>
			</div>
		</nav>
	)
}