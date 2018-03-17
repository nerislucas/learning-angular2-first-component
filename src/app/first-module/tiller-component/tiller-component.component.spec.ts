import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TillerComponentComponent } from './tiller-component.component';

describe('TillerComponentComponent', () => {
  let component: TillerComponentComponent;
  let fixture: ComponentFixture<TillerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TillerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TillerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
