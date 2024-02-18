import { Component, OnInit } from '@angular/core';
import { Author } from '../models/authors.model';
import { AuthorsService } from '../service/AuthorsService';

@Component({
  selector: 'app-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorsService.getAllAuthors()
      .subscribe(authors => {
        this.authors = authors;
      });
  }

}
