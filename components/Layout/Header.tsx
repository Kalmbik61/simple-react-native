import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../../styles/style";
import { IHeaderProps } from "./Header.props";

export default function Header({ img }: IHeaderProps) {
  return (
    <View style={styles.main}>
      <Image source={{ uri: img }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "relative",
    height: 120,
    backgroundColor: "silver",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
