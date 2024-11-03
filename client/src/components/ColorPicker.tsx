import React, { useState } from "react";
import { Colorful, ColorResult } from "@uiw/react-color";

interface ColorPickerProps {
  color: string;
  onChangeColor: (newColor: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChangeColor }) => {
  const [hex, setHex] = useState(color || "#fff");

  return (
    <Colorful
      color={hex}
      onChange={(color: ColorResult) => {
        setHex(color.hex);
        onChangeColor(color.hex);
      }}
      style={{
        width: '80%',
        height: '80%'
      }}
    />
  );
};

export default ColorPicker;