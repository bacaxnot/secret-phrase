import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincessSvgComponent } from './princess-svg.component';

describe('PrincessSvgComponent', () => {
  let component: PrincessSvgComponent;
  let fixture: ComponentFixture<PrincessSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincessSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincessSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
