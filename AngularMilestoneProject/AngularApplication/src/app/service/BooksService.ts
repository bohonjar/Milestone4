import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrl = 'http://localhost:5000/books';

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  public createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

  public updateBook(book: Book): Observable<Book> {
    const url = `${this.booksUrl}/${book.bookId}`;
    return this.http.put<Book>(url, book);
  }

  public deleteBook(bookId: number): Observable<void> {
    const url = `${this.booksUrl}/${bookId}`;
    return this.http.delete<void>(url);
  }
}
