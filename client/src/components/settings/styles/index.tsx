import styled, { css } from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 86vh;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
`;

export const ModalHeader = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  padding: 10px 0;
`;
export const ModalButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
`;
export const AddContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: grid;
  place-items: center;
`;
export const AddFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 80%;
  height: 80%;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 61%;
  margin: auto;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
export const MocalContext = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 80%;
  margin: auto;
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const baseContainerStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-top: 20px;
`;
export const OthersContainer = styled.div`
  ${baseContainerStyles}
`;
export const DashboardContainer = styled.div`
  ${baseContainerStyles}
`;
