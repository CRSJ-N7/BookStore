import { BaseHeader } from "../../../shared/styles/styles";
import GenreSelect from "./catalog-filters/GenreSelect";
import PriceSlider from "./catalog-filters/PriceSlider";
import SortSelect from "./catalog-filters/SortSelect";
import { CatalogNav, CatalogWrapper } from "./Catalog.styles";

const Catalog = () => {
  return (
    <CatalogWrapper>
      <CatalogNav>
        <BaseHeader>Catalog</BaseHeader>
        <GenreSelect />
        <SortSelect />
        <PriceSlider />
      </CatalogNav>
    </CatalogWrapper>
  );
};

export default Catalog;
