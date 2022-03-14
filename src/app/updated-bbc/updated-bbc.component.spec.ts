import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedBBCComponent } from './updated-bbc.component';

describe('UpdatedBBCComponent', () => {
  let component: UpdatedBBCComponent;
  let fixture: ComponentFixture<UpdatedBBCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedBBCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedBBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
