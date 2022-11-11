import React, { useEffect } from "react";

import { ExecutiveStyled } from "./Executive.styled";
import { useAsync } from "hooks/useAsync";
import useExecutive from "hooks/useExecutive";

const Executive: React.FC = () => {
	const { reportData } = useExecutive();
	const { isSuccess } = useAsync();
	useEffect(() => {}, [reportData, isSuccess]);

	return <ExecutiveStyled>Executive</ExecutiveStyled>;
};

export default Executive;
