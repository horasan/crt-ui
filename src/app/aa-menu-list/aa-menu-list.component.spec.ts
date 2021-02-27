import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaMenuListComponent } from './aa-menu-list.component';

describe('AaMenuListComponent', () => {
  let component: AaMenuListComponent;
  let fixture: ComponentFixture<AaMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
