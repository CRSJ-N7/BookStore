import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { PriceValue, PriceWrapper } from "./PriceSlider.styles";
import { useSearchParams } from "react-router-dom";

const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([0, 999]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (_event: Event, newValue: number[]) => {
    setValue(newValue);
    // const params = new URLSearchParams(searchParams);
    // params.set("min", `${newValue[0]}`);
    // params.set("max", `${newValue[1]}`);
    // setSearchParams(params);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("min", `${value[0]}`);
      params.set("max", `${value[1]}`);
      setSearchParams(params);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Select displayEmpty value="Price" renderValue={() => "Price"}>
      <Box sx={{ width: 300, padding: "25px" }}>
        <Slider
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
