import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAboutComponent } from './author-about.component';

describe('AuthorAboutComponent', () => {
  let component: AuthorAboutComponent;
  let fixture: ComponentFixture<AuthorAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
