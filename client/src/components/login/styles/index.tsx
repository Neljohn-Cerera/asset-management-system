import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 10px 0 0 0;
  border-radius: 20px;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
  width: 55%;

  & a {
    font-size: 35em;
    margin-right: 15px;
    color: ${(props) => props.theme.colors.primary};
  }

  & a:hover {
    color: ${(props) => props.theme.colors.secondary};
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  & h2 {
    font-size: 20em;
    font-weight: 300;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
  & img {
    width: 10%;
  }

  & span {
    display: flex;
    padding-left: 60px;
    color: #8a8b8e;
    padding-top: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 50px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  box-shadow: 0px opx 20px 0px rgba(0, 0, 0, 0.2);
`;
