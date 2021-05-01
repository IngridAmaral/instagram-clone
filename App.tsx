import React from "react";
import styled from "styled-components/native";
import Story from "./components/story/Story";

const Container = styled.View`
  background-color: #fff;
`;

const StoriesContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 50px;
`;

const App = (): JSX.Element => {
  return (
    <Container>
      <StoriesContainer showsHorizontalScrollIndicator={false} horizontal>
        <Story text="somenamesomenamesomename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
      </StoriesContainer>
    </Container>
  );
};

export default App;
