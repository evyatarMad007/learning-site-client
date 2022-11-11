import React from "react";
import Footer from "components/static/footer/Footer";
import Navbar from "components/static/navbar/Navbar";
import MainSection from "components/static/main-section/MainSection";
import { AppStyled } from "./App.styled";

const App: React.FC = () => {
	return (
		<AppStyled>
			<Navbar />
			<MainSection />
			<Footer />
		</AppStyled>
	);
};

export default App;
