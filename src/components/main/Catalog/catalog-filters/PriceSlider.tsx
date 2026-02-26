import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { PriceValue, PriceWrapper } from "./PriceSlider.styles";

const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([0, 999]);

  const handleChange = (
    event: Event,
    newValue: number[],
    activeThumb: number,
  ) => {
    console.log(activeThumb);
    setValue(newValue);
  };
  return (
    <Select value="Price" renderValue={() => "Price"}>
      <Box sx={{ width: 300, padding: "25px" }}>
        <Slider
          getAriaLabel={() => "Price"}
          value={value}
          onChange={handleChange}
          min={0}
          max={999}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        />
        <PriceWrapper>
          <PriceValue>€ {value[0]}</PriceValue>
          <PriceValue>€ {value[1]}</PriceValue>
        </PriceWrapper>
      </Box>
    </Select>
  );
};

export default PriceSlider;
