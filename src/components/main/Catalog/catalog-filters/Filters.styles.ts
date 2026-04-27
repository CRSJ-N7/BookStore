import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";

export const StyledSelect = styled(Select)`
  && {
    max-width: 250px;
    min-width: 196px;
    height: 44px;
    border-radius: 16px;
    background: #f0f4ef;
  }

  && .MuiSelect-select {
    padding-inline: 10px !important;
    width: 100%;
    display: flex;
    align-items: center;
  }

  && .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &&:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &&.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  && .MuiSelect-icon {
    display: none;
  }
`;
export const GenreText = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.75px;
  color: #344966;
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: 0.2s;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const PriceValue = styled.p`
  font-size: 16px;
  color: #344966;
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    background: transparent;
    transition: 0.2s;
    color: #b9bac3;
  }

  &&:hover {
  }

  &&.Mui-selected {
    color: #344966;
    background-color: unset;
  }
`;

export const StyledSlider = styled(Slider)`
  color: #344966;

  & .MuiMenu-list {
    padding-top: 0px !important;
    margin-bottom: 0px !important;
  }

  & .MuiSlider-rail {
    color: rgba(13, 24, 33, 0.2);
    height: 6px;
  }

  & .MuiSlider-track {
    height: 12px;
    color: #bfcc94;
    border: none;
  }

  & .MuiSlider-thumb {
    width: 32px;
    height: 32px;
    background: #f7f7fc;
    border: 2px solid #bfcc94;
  }

  & .MuiSlider-thumb:hover,
  & .MuiSlider-thumb.Mui-focusVisible {
    box-shadow: 0 0 0 8px rgba(52, 73, 102, 0.2);
  }
`;

export const SliderBox = styled(Box)`
  width: 300px;
  padding: 25px;
  background: #f0f4ef;
`;
