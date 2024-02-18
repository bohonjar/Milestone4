import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './list-books.component';
import { BooksService } from '../service/BooksService';
import { of } from 'rxjs';

describe('ListBooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [BooksService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get books', () => {
    const booksService = TestBed.inject(BooksService);
    spyOn(booksService, 'getAllBooks').and.returnValue(of([]));
    component.ngOnInit();
    expect(booksService.getAllBooks).toHaveBeenCalled();
  });
});
