import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import { PaginationWrapper } from "./Pagination.styles";
import Arrow from "../../../../assets/pagination/arrow.svg";
import Page from "../../../../assets/pagination/Ellipse.svg";
import PageFilled from "../../../../assets/pagination/EllipseFilled.svg";
import { useEffect } from "react";

const Pagination = () => {
  const books = useAppSelector((state) => state.books.books);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useAppSelector((state) => state.books.totalPages);

  const currentPage = Number(searchParams.get("page")) || 1;

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  useEffect(() => {
    if (!books.length) {
      changePage(currentPage - 1);
    }
    return;
  }, [changePage]);

  return (
    <PaginationWrapper>
      <img
        src={Arrow}
        style={{
          opacity: currentPage === 1 ? 0.3 : 1,
          cursor: currentPage === 1 ? "default" : "pointer",
        }}
        onClick={() => {
          if (currentPage !== 1) {
            changePage(currentPage - 1);
          }
        }}
      />

      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <img
            key={page}
            onClick={() => changePage(page)}
            src={isActive ? Page : PageFilled}
            style={{ cursor: "pointer" }}
          />
        );
      })}

      <img
        src={Arrow}
        style={{
          transform: "rotate(180deg)",
          opacity: currentPage === totalPages ? 0.3 : 1,
          cursor: currentPage === totalPages ? "default" : "pointer",
        }}
        onClick={() => {
          if (currentPage !== totalPages) {
            changePage(currentPage + 1);
          }
        }}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
