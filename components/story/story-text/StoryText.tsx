import React from "react";
import styled from "styled-components/native";

type StoryTextProps = {
  text: string;
};

const StoryTextContainer = styled.Text`
  font-size: 12px;
`;

const StoryText = ({ text }: StoryTextProps): JSX.Element => {
  return (
    <StoryTextContainer ellipsizeMode="tail" numberOfLines={1}>
      {text}
    </StoryTextContainer>
  );
};

export default StoryText;
