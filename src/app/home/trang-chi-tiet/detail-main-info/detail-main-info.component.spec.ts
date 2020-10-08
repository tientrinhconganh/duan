import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMainInfoComponent } from './detail-main-info.component';

describe('DetailMainInfoComponent', () => {
  let component: DetailMainInfoComponent;
  let fixture: ComponentFixture<DetailMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
