import React, { useEffect } from "react";

import { TestingScenariosStyled } from "./TestingScenarios.styled";
import { useAsync } from "hooks/useAsync";
import useMitreMatrix from "hooks/useTestingSernerios";

const TestingScenarios: React.FC = () => {
	const { reportData } = useMitreMatrix();
	const { isSuccess } = useAsync();
	useEffect(() => {}, [reportData, isSuccess]);

	return (
		<TestingScenariosStyled>TestingScenariosStyled</TestingScenariosStyled>
	);
};

export default TestingScenarios;
