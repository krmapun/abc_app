import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotidetallePage } from './notidetalle.page';

describe('NotidetallePage', () => {
  let component: NotidetallePage;
  let fixture: ComponentFixture<NotidetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotidetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotidetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
