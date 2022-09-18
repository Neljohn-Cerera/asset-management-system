import { Spinner, SpinnerContainer } from "../styles/loadingSpinnerStyled";

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <p>Loading page...</p>
      <Spinner />
    </SpinnerContainer>
  );
}
