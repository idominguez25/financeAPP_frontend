import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SueldoComponent } from './sueldo.component';

describe('SueldoComponent', () => {
  let component: SueldoComponent;
  let fixture: ComponentFixture<SueldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SueldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
