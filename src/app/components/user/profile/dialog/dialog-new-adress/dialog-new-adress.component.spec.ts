import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewAdressComponent } from './dialog-new-adress.component';

describe('DialogNewAdressComponent', () => {
  let component: DialogNewAdressComponent;
  let fixture: ComponentFixture<DialogNewAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
