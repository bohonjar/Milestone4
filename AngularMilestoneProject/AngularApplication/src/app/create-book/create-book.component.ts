// CreateBookComponent

import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books.model';
import { BooksService } from '../service/BooksService'; // Import BooksService

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = {
    bookId: Math.floor(Math.random() * 1000000),
    title: '',
    authorId: 0,
    publicationYear: 0,
    genre: '',
    id: 0
  };

  wasSubmitted: boolean = false;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.bookService.createBook(this.book).subscribe(
      (createdBook) => {
        console.log('Book created successfully:', createdBook);
        this.wasSubmitted = true;
      },
      (error) => {
        console.error('Error creating book:', error);
        // Handle error here
      }
    );
  }
}
