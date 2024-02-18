import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksComponent } from './list-books/list-books.component';
import { AuthorsComponent } from './list-authors/list-authors.component';
import { BooksService } from './service/BooksService';
import { AuthorsService } from './service/AuthorsService';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DeleteBookComponent,
    DisplayBookComponent,
    EditBookComponent,
    BooksComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    BooksService,
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
