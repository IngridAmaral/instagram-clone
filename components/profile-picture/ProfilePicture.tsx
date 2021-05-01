import React, { useEffect, useState } from "react";
import { Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

type ProfilePictureProps = {
  imageSize: number;
  borderColor: string[];
  onPress: () => void;
};

const calculateGradientSize = (imageSize: number): number =>
  imageSize < 60 ? imageSize + 5 : imageSize + 12;

const calculateInnerCircleSize = (imageSize: number): number =>
  imageSize < 60 ? imageSize + 2 : imageSize + 7;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

const EmptyBorder = styled.View<{ imageSize: number }>`
  border-radius: 200px;
  width: ${(props) => calculateInnerCircleSize(props.imageSize)}px;
  height: ${(props) => calculateInnerCircleSize(props.imageSize)}px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Picture = styled.Image<{ imageSize: number; source: string }>`
  width: ${(props) => props.imageSize}px;
  height: ${(props) => props.imageSize}px;
  borderRadius: 500px;
  borderWidth: 1px;
  borderColor: rgb(250,250,250))
`;

const ProfilePicture = ({
  imageSize,
  borderColor,
}: ProfilePictureProps): JSX.Element => {
  const [isPressing, setIsPressing] = useState(false);
  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(scale, {
      toValue: isPressing ? 0.92 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [isPressing]);

  return (
    <Container>
      <Pressable
        onPressIn={() => setIsPressing(true)}
        onPressOut={() => setIsPressing(false)}
      >
        <Animatable.View
          style={{
            transform: [
              {
                scale: (scale as unknown) as number,
              },
            ],
          }}
        >
          <LinearGradient
            start={[1, 0.5]}
            end={[0, 1]}
            colors={borderColor}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: calculateGradientSize(imageSize),
              height: calculateGradientSize(imageSize),
              borderRadius: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmptyBorder imageSize={imageSize}>
              <Picture
                source={require("../../assets/20191222_150401.jpg")}
                imageSize={imageSize}
              />
            </EmptyBorder>
          </LinearGradient>
        </Animatable.View>
      </Pressable>
    </Container>
  );
};

export default ProfilePicture;
