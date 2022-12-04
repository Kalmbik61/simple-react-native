import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { gStyle } from "../../styles/style";
import Header from "../Layout/Header";
import { IScreenProps, ScreensE } from "../navigate";
import SomeItem from "../News/SomeItem";
import { INews } from "../News/SomeItem.props";

function Home({ navigation }: IScreenProps) {
  const [news] = useState<INews[]>([
    {
      id: 1,
      title: "Apple",
      description: "1 Infinite Loop Cupertino, CA 95014",
      phone: "1-408-996-1010",
      img: "https://i.playground.ru/p/aCeRDyOBz5uSRnyvL1Cfrg.jpeg",
    },
    {
      id: 2,
      title: "Google",
      description: "3333 Walnut St Boulder CO, 80301",
      phone: "1 303-245-0086",
      img: "https://d1tlrxy0mfxnyo.cloudfront.net/thumbnail/380834/cf8647e8-fa60-4c19-ae78-194cf7f77473.png",
    },
  ]);

  const onLoadScreen = (item: INews) => {
    navigation.navigate(ScreensE.CONTACTS, {
      item,
    });
  };

  return (
    <View style={[gStyle.main, styles.box]}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <SomeItem {...item} onPress={() => onLoadScreen(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
});

export default Home;
