import React, { useEffect } from "react";

import { MitreMatrixStyled } from "./MitreMatrix.styled";
import { useAsync } from "hooks/useAsync";
import useMitreMatrix from "hooks/useMitreMatrix";

const MitreMatrix: React.FC = () => {
	const { reportData } = useMitreMatrix();
	const { isSuccess } = useAsync();
	useEffect(() => {}, [reportData, isSuccess]);

	return <MitreMatrixStyled>MitreMatrixStyled</MitreMatrixStyled>;
};

export default MitreMatrix;
