module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFiles: ["./setupTests.js"],
  transformIgnorePatterns: ["node_modules/(?!react-native|expo-status-bar)"],
};
