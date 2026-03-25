import { useEffect, useState } from "react";
import bookApi from "../../../../api/bookApi";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await bookApi.getBooks({ page });
        console.log("books :", data);
      } catch (e) {
        console.error(e);
      }
    };

    getBooks();
  }, [page]);

  const changePage = (newPage: number | null) => {
    if (!newPage) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  return (
    <div>
      {/*РАБОТАЕТ, надо потом ток с серва totalPages слизнуть */}
      <button onClick={() => changePage(page - 1 ? page - 1 : null)}>
        prev
      </button>
      <button onClick={() => changePage(1)}>Page 1</button>
      <button onClick={() => changePage(2)}>Page 2</button>
      <button onClick={() => changePage(page + 1)}>next</button>
    </div>
  );
};

export default Pagination;
