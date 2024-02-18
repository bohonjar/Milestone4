export interface Book {
  bookId: number;
  id: number;
  title: string;
  authorId: number;
  publicationYear: number;
  genre: string;
  editMode?: boolean;
}
