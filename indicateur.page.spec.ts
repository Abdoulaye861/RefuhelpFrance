import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurPage } from './indicateur.page';

describe('IndicateurPage', () => {
  let component: IndicateurPage;
  let fixture: ComponentFixture<IndicateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
