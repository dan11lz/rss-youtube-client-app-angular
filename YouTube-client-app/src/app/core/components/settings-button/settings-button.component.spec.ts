import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SettingsButtonComponent } from './settings-button.component';

@Component({
  selector: 'app-custom-button',
  template: '<div></div>',
})
class MockCustomButtonComponent {}

describe('SettingsButtonComponent', () => {
  let component: SettingsButtonComponent;
  let fixture: ComponentFixture<SettingsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsButtonComponent, MockCustomButtonComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
