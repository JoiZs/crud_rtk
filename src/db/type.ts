export type bookType = {
  id: number;
  title: string;
  published: string;
  authorId: number;
};
export type authorType = {
  id: number;
  name: string;
  email: string;
  books: bookType[];
};
