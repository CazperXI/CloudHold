import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promot } from './promot';

describe('Promot', () => {
  let component: Promot;
  let fixture: ComponentFixture<Promot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
