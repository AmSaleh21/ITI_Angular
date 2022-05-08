import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTieMenuComponent } from './red-tie-menu.component';

describe('RedTieMenuComponent', () => {
  let component: RedTieMenuComponent;
  let fixture: ComponentFixture<RedTieMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedTieMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
