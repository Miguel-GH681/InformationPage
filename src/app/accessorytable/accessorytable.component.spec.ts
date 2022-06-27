import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorytableComponent } from './accessorytable.component';

describe('AccessorytableComponent', () => {
  let component: AccessorytableComponent;
  let fixture: ComponentFixture<AccessorytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessorytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessorytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
