import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStatusIndicator } from './online-status-indicator.component';

describe('OnlineStatusIndicator', () => {
  let component: OnlineStatusIndicator;
  let fixture: ComponentFixture<OnlineStatusIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineStatusIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineStatusIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
