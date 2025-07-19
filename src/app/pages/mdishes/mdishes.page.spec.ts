import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdishesPage } from './mdishes.page';

describe('MdishesPage', () => {
  let component: MdishesPage;
  let fixture: ComponentFixture<MdishesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MdishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
