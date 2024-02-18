import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Express';
  version = 1.0;

  constructor(private router: Router) {}

  displayVersion(): void {
    alert(`Version: ${this.version}`);
  }

  displayAuthorList(): void {
    this.router.navigate(['/list-authors']);
  }

  displayBookList(): void {
    this.router.navigate(['/list-books']);
  }
}
