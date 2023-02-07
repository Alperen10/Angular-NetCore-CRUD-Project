import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCtypeComponent } from './show-ctype.component';

describe('ShowCtypeComponent', () => {
  let component: ShowCtypeComponent;
  let fixture: ComponentFixture<ShowCtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
