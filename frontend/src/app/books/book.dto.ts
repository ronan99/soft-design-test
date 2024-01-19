export type Book = {
  id?: number;
  title: string;
  author: string;
  description: string;
  pages: number;
  deleted?: boolean;
}



export type BookUpdate = {
  id: number;
  title: string;
  author: string;
  description: string;
  pages: number;
  deleted?: boolean;
}
