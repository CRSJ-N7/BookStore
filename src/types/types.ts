export type Book = {
  id: number;
  author: string;
  cover: string;
  description: string;
  genre: string;
  name: string;
  price: number;
  avgRating?: number;
  ratingsCount?: number;
  quantity?: number;
};

export type Genres = string[];
