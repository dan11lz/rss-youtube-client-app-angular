import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringDashboardComponent } from './filtering-dashboard.component';

xdescribe('FilteringDashboardComponent', () => {
  let component: FilteringDashboardComponent;
  let fixture: ComponentFixture<FilteringDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteringDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilteringDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
