import React from "react";
import { Text } from "react-native";

type StoryTextProps = {
  text: string;
};

const StoryText = ({ text }: StoryTextProps): JSX.Element => {
  return (
    <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 12 }}>
      {text}
    </Text>
  );
};

export default StoryText;
