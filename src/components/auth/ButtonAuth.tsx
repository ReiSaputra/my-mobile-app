import { Pressable, Text } from "react-native";
import { style } from "./ButtonAuth.style";

type ButtonAuthProps = {
  onSubmit: () => void;
  font: string;
  titleButton: string;
};
const ButtonAuth = ({ onSubmit, font, titleButton }: ButtonAuthProps) => {
  return (
    <Pressable style={style.button} onPress={onSubmit}>
      <Text style={[style.title, { fontFamily: font }]}>{titleButton}</Text>
    </Pressable>
  );
};

export default ButtonAuth;
