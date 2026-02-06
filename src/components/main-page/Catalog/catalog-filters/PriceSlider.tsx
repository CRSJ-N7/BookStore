import Slider from "@mui/material/Slider";
import { useState } from "react";

const PriceSlider = () => {
  const [price, setPrice] = useState<number[]>([0, 500]);
  return (
    <Slider
      value={price}
      onChange={(_, newValue) => setPrice(newValue as number[])}
      valueLabelDisplay="auto"
      min={0}
      max={500}
    />
  );
};

export default PriceSlider;
