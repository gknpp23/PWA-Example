import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallButton } from './install-button.component';

describe('InstallButton', () => {
  let component: InstallButton;
  let fixture: ComponentFixture<InstallButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstallButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
