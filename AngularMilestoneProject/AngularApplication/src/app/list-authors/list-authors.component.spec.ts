import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './list-authors.component';
import { AuthorsService } from '../service/AuthorsService';
import { of } from 'rxjs';

describe('ListAuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      providers: [AuthorsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get authors', () => {
    const authorsService = TestBed.inject(AuthorsService);
    spyOn(authorsService, 'getAllAuthors').and.returnValue(of([]));
    component.ngOnInit();
    expect(authorsService.getAllAuthors).toHaveBeenCalled();
  });
});
