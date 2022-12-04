import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigate from "./components/navigate";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = () =>
          Font.loadAsync({
            "mt-bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
            "mt-ligth": require("./assets/fonts/MontserratAlternates-Light.ttf"),
            "mt-medium": require("./assets/fonts/MontserratAlternates-Medium.ttf"),
          });
        await fonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return (
      <SafeAreaView style={styles.loading}>
        <Text>Loading👋...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Navigate />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
