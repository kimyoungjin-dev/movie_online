import React from "react";
import ScrollContainer from "../../Components/SlideComponent/ScrollContainer";
import Header from "./Header";
import Center from "./Center";
import Bottom from "./Bottom";
import Contents from "./Contents";

import styled from "styled-components/native";

const Container = styled.View`
  padding-bottom: 80px;
`;

const Presenter = ({ result, loading, cast, crew, openBrowser }) => {
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <Header result={result} openBrowser={openBrowser} />
        <Center result={result} openBrowser={openBrowser} />
        <Bottom cast={cast} crew={crew} result={result} />
        <Contents result={result} />
      </Container>
    </ScrollContainer>
  );
};

export default Presenter;
