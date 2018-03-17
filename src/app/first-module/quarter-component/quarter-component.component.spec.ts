import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterComponentComponent } from './quarter-component.component';

describe('QuarterComponentComponent', () => {
  let component: QuarterComponentComponent;
  let fixture: ComponentFixture<QuarterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
