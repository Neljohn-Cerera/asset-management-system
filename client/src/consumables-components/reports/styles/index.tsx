import styled from "styled-components";

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 86vh;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  @media print {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 61%;
  margin: auto;
  padding: 10px 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
