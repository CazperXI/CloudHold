import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardimg } from './cardimg';

describe('Cardimg', () => {
  let component: Cardimg;
  let fixture: ComponentFixture<Cardimg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardimg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardimg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
