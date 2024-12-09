import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionPage } from './conversion.page';

describe('ConversionPage', () => {
  let component: ConversionPage;
  let fixture: ComponentFixture<ConversionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
