import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomPt2Component } from './dom-pt2.component';

describe('DomPt2Component', () => {
  let component: DomPt2Component;
  let fixture: ComponentFixture<DomPt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomPt2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomPt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
