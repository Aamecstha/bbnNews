import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeIntroComponent } from './pipe-intro.component';

describe('PipeIntroComponent', () => {
  let component: PipeIntroComponent;
  let fixture: ComponentFixture<PipeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
