import { View } from "react-native";
import { style } from "./ViewForm.style";
import React from "react";

interface ViewDashboardProps {
  children: React.ReactNode;
}
const ViewForm: React.FC<ViewDashboardProps> = ({ children }) => {
  return <View style={style.viewForm}>{children}</View>;
};

export default ViewForm;
