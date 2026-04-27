import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowIcon,
  GenreText,
  PriceValue,
  PriceWrapper,
  SliderBox,
  StyledSelect,
  StyledSlider,
} from "./Filters.styles";
import filterArrow from "../../../../assets/main-page/filters/FilterArrow.svg";
import { FlexWrapper } from "../../../../shared/styles/styles";

const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([0, 999]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }; // pizdec

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
    <StyledSelect
      displayEmpty
      value="Price"
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderValue={() => (
        <FlexWrapper
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <GenreText>Price</GenreText>

          <ArrowIcon
            src={filterArrow}
            style={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </FlexWrapper>
      )}
      MenuProps={{
        MenuListProps: {
          sx: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
        PaperProps: {
          sx: {
            marginTop: "10px",
          },
        },
      }}
    >
      <SliderBox>
        <StyledSlider
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
      </SliderBox>
    </StyledSelect>
  );
};

export default PriceSlider;
