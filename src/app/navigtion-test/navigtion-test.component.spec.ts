import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigtionTestComponent } from './navigtion-test.component';

describe('NavigtionTestComponent', () => {
  let component: NavigtionTestComponent;
  let fixture: ComponentFixture<NavigtionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigtionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigtionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
