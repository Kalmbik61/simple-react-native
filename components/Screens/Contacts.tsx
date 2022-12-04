import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { gStyle } from "../../styles/style";
import Header from "../Layout/Header";
import { IScreenProps } from "../navigate";
import { INews } from "../News/SomeItem.props";

export default function Contacts(props: IScreenProps) {
  const { item } = props.route.params as { item: INews };

  return (
    <View style={[gStyle.main, styles.main]}>
      <Header img={item.img} />

      <View style={styles.row}>
        <Text style={[gStyle.title, styles.text]}>Address: </Text>
        <Text style={styles.descr}>{item.description}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[gStyle.title, styles.text]}>Phone: </Text>
        <Text style={styles.descr}>{item.phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  descr: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#333",
  },
});
