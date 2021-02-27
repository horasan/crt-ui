import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorefreComponent } from './corefre.component';

describe('CorefreComponent', () => {
  let component: CorefreComponent;
  let fixture: ComponentFixture<CorefreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorefreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorefreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
