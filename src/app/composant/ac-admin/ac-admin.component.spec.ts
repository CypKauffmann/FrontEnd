import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcAdminComponent } from './ac-admin.component';

describe('AcAdminComponent', () => {
  let component: AcAdminComponent;
  let fixture: ComponentFixture<AcAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
