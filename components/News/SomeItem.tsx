import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../../styles/style";
import { ISomeItemProps } from "./SomeItem.props";

export default function SomeItem({
  id,
  title,
  description,
  onPress,
}: ISomeItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[gStyle.title, styles.title]}>{title}</Text>
      <Text style={[gStyle.text]}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
  },
});
