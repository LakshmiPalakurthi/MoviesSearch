import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBigComponent } from './movie-big.component';

describe('MovieBigComponent', () => {
  let component: MovieBigComponent;
  let fixture: ComponentFixture<MovieBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
