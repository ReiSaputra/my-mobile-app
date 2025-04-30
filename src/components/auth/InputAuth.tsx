import { TextInput, TextInputProps, Animated } from "react-native";
import { style } from "./InputAuth.style";
import { useEffect, useRef, useState } from "react";
// import Animated from "react-native-reanimated";

type InputAuthProps = {
  placeholderInput: string;
  textContentTypeInput: TextInputProps["textContentType"];
  keyboardTypeInput: TextInputProps["keyboardType"];
  secureTextEntryInput?: TextInputProps["secureTextEntry"];
  onChangeInput: (value: string) => void;
};
const InputAuth = ({ onChangeInput, textContentTypeInput, placeholderInput, keyboardTypeInput, secureTextEntryInput = false }: InputAuthProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <TextInput
        style={[style.input, focus && style.inputChange]}
        placeholder={placeholderInput}
        textContentType={textContentTypeInput}
        keyboardType={keyboardTypeInput}
        onChangeText={onChangeInput}
        secureTextEntry={secureTextEntryInput}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      ></TextInput>
    </>
  );
};

export default InputAuth;
