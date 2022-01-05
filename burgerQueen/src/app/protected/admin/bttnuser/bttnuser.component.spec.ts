import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnuserComponent } from './bttnuser.component';

describe('BttnuserComponent', () => {
  let component: BttnuserComponent;
  let fixture: ComponentFixture<BttnuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BttnuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
