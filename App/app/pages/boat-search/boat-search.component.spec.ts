import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatSearchComponent } from './boat-search.component';

describe('BoatSearchComponent', () => {
  let component: BoatSearchComponent;
  let fixture: ComponentFixture<BoatSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
