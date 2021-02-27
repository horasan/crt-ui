import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaMenuComponent } from './aa-menu.component';

describe('AaMenuComponent', () => {
  let component: AaMenuComponent;
  let fixture: ComponentFixture<AaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
