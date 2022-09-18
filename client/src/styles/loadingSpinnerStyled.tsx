import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0b0b0b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Spinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 16px solid #e3e3e3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
`;
