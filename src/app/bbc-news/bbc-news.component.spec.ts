import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcNewsComponent } from './bbc-news.component';

describe('BbcNewsComponent', () => {
  let component: BbcNewsComponent;
  let fixture: ComponentFixture<BbcNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbcNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
