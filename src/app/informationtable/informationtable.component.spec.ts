import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationtableComponent } from './informationtable.component';

describe('InformationtableComponent', () => {
  let component: InformationtableComponent;
  let fixture: ComponentFixture<InformationtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
