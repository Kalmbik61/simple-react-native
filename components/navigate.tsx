import React from "react";
import Home from "./Screens/Home";
import Contacts from "./Screens/Contacts";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { INews } from "./News/SomeItem.props";

const Stack = createNativeStackNavigator();

export enum ScreensE {
  HOME = "Home",
  CONTACTS = "Contacts",
}

export interface IScreenProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<ParamListBase>;
}

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreensE.HOME}
          options={{ title: "Main" }}
          component={Home}
        />
        <Stack.Screen
          name={ScreensE.CONTACTS}
          options={{ title: "Contacts" }}
          component={Contacts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
