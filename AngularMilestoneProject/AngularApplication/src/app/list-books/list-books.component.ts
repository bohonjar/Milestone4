import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books.model';
import { BooksService } from '../service/BooksService';

@Component({
  selector: 'app-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.booksService.getAllBooks()
      .subscribe(books => {
        this.books = books.map(book => ({ ...book, editMode: false }));
      });
  }


  toggleEditMode(book: Book): void {
    book.editMode = !book.editMode;
  }

  saveBook(book: Book): void {
    this.booksService.updateBook(book)
      .subscribe(updatedBook => {
        const index = this.books.findIndex(b => b.bookId === updatedBook.bookId);
        if (index !== -1) {
          this.books[index] = updatedBook;
          this.toggleEditMode(updatedBook);
        }
        console.log('Book updated:', updatedBook);
        this.loadBooks();
      });
  }

  deleteBook(book: Book): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.booksService.deleteBook(book.bookId)
        .subscribe(() => {
          this.books = this.books.filter(b => b.bookId !== book.bookId);
          console.log('Book deleted:', book);
          alert('Book deleted successfully');
        });
    }
  }
}
