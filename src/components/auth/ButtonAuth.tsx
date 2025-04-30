import { Pressable, Text } from "react-native";
import { style } from "./ButtonAuth.style";

type ButtonAuthProps = {
  onSubmit: () => void;
  font: string;
};
const ButtonAuth = ({ onSubmit, font }: ButtonAuthProps) => {
  return (
    <Pressable style={style.button} onPress={onSubmit}>
      <Text style={[style.title, { fontFamily: font }]}>Log In</Text>
    </Pressable>
  );
};

export default ButtonAuth;
