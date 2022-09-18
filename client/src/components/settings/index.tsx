import React from "react";
import DashboardComponent from "./dashboard";
import OthersComponent from "./others";
import { Container, SettingsContainer } from "./styles";

const SettingsComponent: React.FC = (): JSX.Element => {
  return (
    <SettingsContainer>
      <Container>
        <DashboardComponent />
        <OthersComponent />
      </Container>
    </SettingsContainer>
  );
};

export default SettingsComponent;
