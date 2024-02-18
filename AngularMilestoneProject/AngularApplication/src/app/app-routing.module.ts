import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BooksComponent } from './list-books/list-books.component';
import { AuthorsComponent } from './list-authors/list-authors.component';

const routes: Routes = [
  { path: 'create-book', component: CreateBookComponent },
  { path: 'list-books', component: BooksComponent },
  { path: 'list-authors', component: AuthorsComponent },
  { path: 'create', redirectTo: '/create-book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
