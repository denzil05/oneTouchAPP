import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsViewComponent } from './claims-view.component';

describe('ClaimsViewComponent', () => {
  let component: ClaimsViewComponent;
  let fixture: ComponentFixture<ClaimsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
