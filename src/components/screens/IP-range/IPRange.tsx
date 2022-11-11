import React, { useEffect } from "react";

import { IPRangeStyled } from "./IPRange.styles";
import { useAsync } from "hooks/useAsync";
import useIPRange from "hooks/useExecutive";

const IPRange: React.FC = () => {
	const { reportData } = useIPRange();
	const { isSuccess } = useAsync();
	useEffect(() => {}, [reportData, isSuccess]);

	return <IPRangeStyled>IPRange</IPRangeStyled>;
};

export default IPRange;
