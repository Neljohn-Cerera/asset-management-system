import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  min-width: 600px;
  height: 30px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-size: 2em;
  justify-content: center;
  width: 100%;
  padding: 10px;
  @media print {
    display: none;
  }
`;
