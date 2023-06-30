import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretStoryComponent } from './secret-story.component';

describe('SecretStoryComponent', () => {
  let component: SecretStoryComponent;
  let fixture: ComponentFixture<SecretStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
