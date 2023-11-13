import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignalComponent } from './form-signal.component';

describe('FormSignalComponent', () => {
  let component: FormSignalComponent;
  let fixture: ComponentFixture<FormSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSignalComponent]
    });
    fixture = TestBed.createComponent(FormSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
