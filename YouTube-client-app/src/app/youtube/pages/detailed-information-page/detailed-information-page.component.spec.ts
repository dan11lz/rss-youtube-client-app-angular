import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInformationPageComponent } from './detailed-information-page.component';

xdescribe('DetailedInformationPageComponent', () => {
  let component: DetailedInformationPageComponent;
  let fixture: ComponentFixture<DetailedInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedInformationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
