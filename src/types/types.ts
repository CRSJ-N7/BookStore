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

export type User = {
  id: number;
  email: string;
  name: string | null;
  avatar: string | null;
};

export type Comment = {
  id: number;
  text: string;
  createdAt: string;
  user: User;
};
