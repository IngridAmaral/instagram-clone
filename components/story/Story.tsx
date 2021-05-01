import React from "react";
import styled from "styled-components/native";
import ProfilePictre from "../profile-picture/ProfilePicture";
import StoryText from "./story-text/StoryText";

type StoryProps = {
  text: string;
  imageSize: number;
};

const REDGRADIENT = ["#FD1D1D", "#F56040", "#F77737", "#FCAF45", "#FFDC80"];
// const LIGHTGREY = ["#d3d3d3", "#d3d3d3"];
// const TRASNPARENT = ["transparent", "transparent"];

const onPress = () => {
  // do something
};

const Container = styled.View`
  width: 85px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 5px;
`;

const Story = ({ text, imageSize }: StoryProps): JSX.Element => {
  return (
    <Container>
      <ProfilePictre
        onPress={onPress}
        imageSize={imageSize}
        borderColor={REDGRADIENT}
      />
      <StoryText text={text} />
    </Container>
  );
};

export default Story;
