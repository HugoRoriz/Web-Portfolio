import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectsComponent } from './pet-projects.component';

describe('PetProjectsComponent', () => {
  let component: PetProjectsComponent;
  let fixture: ComponentFixture<PetProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
