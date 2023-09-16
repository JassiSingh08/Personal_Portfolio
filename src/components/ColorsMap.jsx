import React, { useContext } from "react";
import { TwitterPicker } from "react-color";
import { DarkContext } from "../context/ThemeContext";

const ColorPicker = () => {
  const { toggleAccentColors } = useContext(DarkContext);

  const handleColorChange = (newColor) => {
    toggleAccentColors(newColor.hex);
  };

  const CustomPresets = [
    "#ef9a9a",
    "#e57373",
    "#ef5350",
    "#f44336",
    "#f48fb1",
    "#f06292",
    "#ec407a",
    "#e91e63",
    "#ce93d8",
    "#ba68c8",
    "#ab47bc",
    "#9c27b0",
    "#b39ddb",
    "#9575cd",
    "#7e57c2",
    "#673AB7",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#2196F3",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#03A9F4",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#00BCD4",
    "#80CBC4",
    "#4DB6AC",
    "#26A69A",
    "#009688",
    "#A5D6A7",
    "#81C784",
    "#66BB6A",
    "#4CAF50",
    "#C5E1A5",
    "#AED581",
    "#9CCC65",
    "#8BC34A",
    "#E6EE9C",
    "#DCE775",
    "#D4E157",
    "#CDDC39",
  ];

  return (
    // <div className="ColorMap">
      <TwitterPicker
        onChange={handleColorChange}
        colors={CustomPresets}
        triangle="hide"
        width="250px"
      />
    // </div>
  );
};

export default ColorPicker;
