import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Story from "./components/story/Story";

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ flexDirection: "row", marginTop: 50 }}
      >
        <Story text="somenamesomenamesomename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
        <Story text="somename" imageSize={64} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // overflow: "scroll",
  },
});
