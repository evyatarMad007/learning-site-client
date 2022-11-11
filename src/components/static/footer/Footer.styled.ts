import styled from "styled-components";


export const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  padding:  40px 0 40px 7%;
  width: 100%;
  line-height: 150%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 7%;
    width: 350px;
    height: 3px;
    background-color: var(--primary-color);
  }

  .logo {
    position: absolute;
    top: 120px;
    right: 10%;

    img {
        width: 270px;
    }
  }
`;