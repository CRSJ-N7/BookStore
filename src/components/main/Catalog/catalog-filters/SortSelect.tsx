import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowIcon,
  GenreText,
  StyledMenuItem,
  StyledSelect,
} from "./Filters.styles";
import filterArrow from "../../../../assets/main-page/filters/FilterArrow.svg";

import { FlexWrapper } from "../../../../shared/styles/styles";

const SortSelect = () => {
  const [sort, setSort] = useState<string>("Price");
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const handleChange = (value: string) => {
    setSort(value);

    const params = new URLSearchParams(searchParams);
    params.set("sortBy", `${value}`);

    setSearchParams(params);
  };

  useEffect(() => {
    const currentSort = searchParams.get("sortBy");
    if (currentSort) {
      setSort(currentSort);
    }
  }, []);

  return (
    <StyledSelect
      value={sort}
      onChange={(e) => handleChange(e.target.value as string)}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      sortFilter
      renderValue={() => (
        <FlexWrapper
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <GenreText>Sort by {sort}</GenreText>

          <ArrowIcon
            src={filterArrow}
            style={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </FlexWrapper>
      )}
    >
      <StyledMenuItem value="Price">Price</StyledMenuItem>
      <StyledMenuItem value="Name">Name</StyledMenuItem>
      <StyledMenuItem value="Author name">Author name</StyledMenuItem>
      <StyledMenuItem value="Rating">Rating</StyledMenuItem>
      <StyledMenuItem value="Date of Issue">Date of Issue</StyledMenuItem>
    </StyledSelect>
  );
};

export default SortSelect;
