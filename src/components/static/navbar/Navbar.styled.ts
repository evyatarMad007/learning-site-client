import styled from "styled-components";

export const NavbarStyled = styled.header`
	position: absolute;
	top: 0;
	width: 100%;
	height: var(--header-height);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	border-bottom: 1px solid #e7e7e771;

	.nav {
		width: 90%;
		max-width: 1000px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.nav-link {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			text-decoration: none;
			justify-content: center;
			color: black;

			svg {
				height: max-content;
				width: max-content;
				font-size: 18px;
				margin-right: 5px;
			}

			&:hover * {
				color: var(--primary-color);
				svg {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}
`;
