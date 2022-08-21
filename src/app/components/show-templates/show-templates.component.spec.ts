import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTemplatesComponent } from './show-templates.component';

describe('ShowTemplatesComponent', () => {
  let component: ShowTemplatesComponent;
  let fixture: ComponentFixture<ShowTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
