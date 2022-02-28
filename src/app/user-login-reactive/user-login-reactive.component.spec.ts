import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginReactiveComponent } from './user-login-reactive.component';

describe('UserLoginReactiveComponent', () => {
  let component: UserLoginReactiveComponent;
  let fixture: ComponentFixture<UserLoginReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
