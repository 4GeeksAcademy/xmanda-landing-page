import React from "react";

//import child components
import NavBar from "./navbar"
import JumboTron from "./jumbotron"
import CardList from "./cardlist"
import Footer from "./footer"

//main component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<div ClassName="container">
				<JumboTron/>
				<CardList/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
