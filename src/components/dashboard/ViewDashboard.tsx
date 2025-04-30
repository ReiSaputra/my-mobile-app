import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { style } from "./ViewDashboard.style";

interface ViewDashboardProps {
  children: React.ReactNode;
}

const ViewDashboard: React.FC<ViewDashboardProps> = ({ children }) => {
  return <ScrollView style={style.viewDashboard}>{children}</ScrollView>;
};

export default ViewDashboard;
