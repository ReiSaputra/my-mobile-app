import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { style } from "./ViewPocket.style";

interface ViewPocketProps {
  children: React.ReactNode;
}

const ViewPocket: React.FC<ViewPocketProps> = ({ children }) => {
  return <ScrollView style={style.viewPocket}>{children}</ScrollView>;
};

export default ViewPocket;
