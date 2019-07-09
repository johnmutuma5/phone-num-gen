import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { ListNumsComponent } from './list-nums.component';

describe('ListNumsComponent', () => {
  let component: ListNumsComponent;
  let fixture: ComponentFixture<ListNumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNumsComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the maximum phone number on filter', () => {
    component.phoneNumbers = [ '0700', '0701' ];
    component.onGetMaxPhoneNumber();
    expect(component.numsToRender).toEqual(['0701']);
  });

  it('should invoke onGetMaxPhoneNumber when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('#filter-max'));
    const spy = spyOn(component, 'onGetMaxPhoneNumber');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('should return the minimum phone number on filter', () => {
    component.phoneNumbers = [ '0700', '0701' ];
    component.onGetMinPhoneNumber();
    expect(component.numsToRender).toEqual(['0700']);
  });

  it('should invoke onGetMaxPhoneNumber when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('#filter-min'));
    const spy = spyOn(component, 'onGetMinPhoneNumber');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('should reset filters', () => {
    component.phoneNumbers = [ '0700', '0701' ];
    component.onGetMinPhoneNumber();
    expect(component.numsToRender).toEqual(['0700']);
    // reset
    component.onResetFilters();
    expect(component.numsToRender).toEqual(component.phoneNumbers);
  });

  it('should invoke the reset filters handler on click button', () => {
    const button = fixture.debugElement.query(By.css('#reset-filters'));
    const spy = spyOn(component, 'onResetFilters');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('should sort ascending', () => {
    component.numsToRender = [ '0703', '0701' ];
    component.onSortAscending();
    expect(component.numsToRender[0]).toEqual('0701');
  });

  it('should trigger the sort ascending handler on click button', () => {
    const button = fixture.debugElement.query(By.css('#sort-ascending'));
    const spy = spyOn(component, 'onSortAscending');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('should sort descending', () => {
    component.numsToRender = [ '0700', '0701' ];
    component.onSortDescending();
    expect(component.numsToRender[0]).toEqual('0701');
  });

  it('should trigger the sort descending handler on click button', () => {
    const button = fixture.debugElement.query(By.css('#sort-descending'));
    const spy = spyOn(component, 'onSortDescending');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
