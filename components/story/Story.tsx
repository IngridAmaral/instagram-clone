import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ProfilePictre from "../profile-picture/ProfilePicture";
import StoryText from "./story-text/StoryText";

type StoryProps = {
  text: string;
  imageSize: number;
};

const REDGRADIENT = ["#FD1D1D", "#F56040", "#F77737", "#FCAF45", "#FFDC80"];
const LIGHTGREY = ["#d3d3d3", "#d3d3d3"];
const TRASNPARENT = ["transparent", "transparent"];

const openStories = () => {
  // do something
};

const Story = ({ text, imageSize }: StoryProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <ProfilePictre
        openStories={openStories}
        imageSize={imageSize}
        borderColor={REDGRADIENT}
      />
      <StoryText text={text} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: 85,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 5,
  },
});
