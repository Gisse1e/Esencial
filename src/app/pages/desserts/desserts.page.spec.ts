import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DessertsPage } from './desserts.page';

describe('DessertsPage', () => {
  let component: DessertsPage;
  let fixture: ComponentFixture<DessertsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
