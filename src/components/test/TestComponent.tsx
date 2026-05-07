import { useEffect, useState } from "react";
import bookApi from "../../api/bookApi";
import type { Book } from "../../types/types";
import {
  GridBookContainer,
  GridBookItem,
  GridContainer,
  GridItem,
} from "./TestComponent.styles";

const TestComponent = () => {
  const [catalog, setCatalog] = useState<Book[]>();

  useEffect(() => {
    const loadBooks = async () => {
      const allbooks = await bookApi.getBooks({});
      setCatalog(allbooks.filteredBooks);
    };

    loadBooks();
  }, []);

  return (
    <>
      <div>hey</div>

      {catalog?.map((element) => {
        return (
          <GridContainer>
            <GridItem>First</GridItem>
            <GridItem>Second</GridItem>
            <GridItem>Third</GridItem>
            <GridItem>Fourth</GridItem>
            <GridItem>Fifth</GridItem>
            <GridBookContainer>
              <GridBookItem key={element.id}>{element.name}</GridBookItem>
              <GridBookItem key={element.id}>{element.author}</GridBookItem>
            </GridBookContainer>
          </GridContainer>
        );
      })}
    </>
  );
};

export default TestComponent;
