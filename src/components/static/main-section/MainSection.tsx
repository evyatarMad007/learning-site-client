import React from "react";
import { Routes, Route } from "react-router-dom";
import Executive from "components/screens/executive/Executive";
import IPRange from "components/screens/IP-range/IPRange";
import MitreMatrix from "components/screens/mitre-matrix/MitreMatrix";
import TestingScenarios from "components/screens/testing-scenarios/TestingScenarios";
import { MainSectionStyled } from "./MainSection.styled";

const MainSection: React.FC = () => {
	return (
		<MainSectionStyled>
			<Routes>
				<Route path='/' element={<Executive />} />
				<Route path='/ip-range' element={<IPRange />} />
				<Route path='/mitre-matrix' element={<MitreMatrix />} />
				<Route
					path='/testing-scenarios-details'
					element={<TestingScenarios />}
				/>
			</Routes>
		</MainSectionStyled>
	);
};

export default MainSection;
