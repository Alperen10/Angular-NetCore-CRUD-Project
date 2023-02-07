import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCtypeComponent } from './add-edit-ctype.component';

describe('AddEditCtypeComponent', () => {
  let component: AddEditCtypeComponent;
  let fixture: ComponentFixture<AddEditCtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
