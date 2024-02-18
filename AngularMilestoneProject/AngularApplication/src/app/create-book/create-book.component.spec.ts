import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBookComponent } from './create-book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../service/BooksService'; // Import BooksService
import { of } from 'rxjs';
import { Book } from '../models/books.model'; // Import Book interface

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;
  let bookService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBookComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [BooksService]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a book', () => {
    const createBookResponse: Book = {
      id: 1,
      title: 'Test Title',
      author: 123,
      publicationYear: 2022,
      genre: 'Test Genre',
      bookId: 0
    };
    spyOn(bookService, 'createBook').and.returnValue(of(createBookResponse));
    component.book.title = 'Test Title';
    component.book.author = 123; // Assuming authorId
    component.book.publicationYear = 2022;
    component.book.genre = 'Test Genre';
    component.onSubmit();
    expect(bookService.createBook).toHaveBeenCalled();
    expect(component.wasSubmitted).toBeTrue();
  });
});
