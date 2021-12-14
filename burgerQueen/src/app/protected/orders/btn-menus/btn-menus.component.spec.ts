import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMenusComponent } from './btn-menus.component';

describe('BtnMenusComponent', () => {
  let component: BtnMenusComponent;
  let fixture: ComponentFixture<BtnMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
