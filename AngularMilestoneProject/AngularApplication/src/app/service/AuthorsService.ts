import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Author } from '../models/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private authorsUrl = 'http://localhost:5000/authors';

  constructor(private http: HttpClient) { }

  public getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

  public createAuthor(author: Author): Observable<boolean> {
    return this.http.post<boolean>(this.authorsUrl, author);
  }

  public updateAuthor(author: Author): Observable<boolean> {
    return this.http.put<boolean>(`${this.authorsUrl}/${author.authorId}`, author);
  }

  public deleteAuthor(authorId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.authorsUrl}/${authorId}`);
  }
}
