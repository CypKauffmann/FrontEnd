import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaFormComponent } from './pa-form.component';

describe('PaFormComponent', () => {
  let component: PaFormComponent;
  let fixture: ComponentFixture<PaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
