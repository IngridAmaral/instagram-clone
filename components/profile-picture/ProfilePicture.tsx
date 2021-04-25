import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

type ProfilePictureProps = {
  imageSize: number;
  borderColor: string[];
  openStories: () => void;
};

const calculateGradientSize = (imageSize: number): number =>
  imageSize < 60 ? imageSize + 5 : imageSize + 12;

const calculateInnerCircleSize = (imageSize: number): number =>
  imageSize < 60 ? imageSize + 2 : imageSize + 7;

const ProfilePicture = ({
  imageSize,
  borderColor,
}: ProfilePictureProps): JSX.Element => {
  const [isPressing, setIsPressing] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(isPressing ? 0.92 : 1));

  useEffect(() => {
    Animated.timing(scale, {
      toValue: isPressing ? 0.92 : 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [isPressing]);

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={function () {
          setIsPressing(true);
        }}
        onPressOut={() => {
          setIsPressing(false);
        }}
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
            style={{
              width: calculateGradientSize(imageSize),
              height: calculateGradientSize(imageSize),
              borderRadius: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderRadius: 200,
                width: calculateInnerCircleSize(imageSize),
                height: calculateInnerCircleSize(imageSize),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={require("../../assets/20191222_150401.jpg")}
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: 500,
                  borderWidth: 1,
                  borderColor: "rgb(250,250,250))",
                }}
              ></Image>
            </View>
          </LinearGradient>
        </Animatable.View>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
});
