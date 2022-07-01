import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusTableComponent } from './versus-table.component';

describe('VersusTableComponent', () => {
  let component: VersusTableComponent;
  let fixture: ComponentFixture<VersusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
