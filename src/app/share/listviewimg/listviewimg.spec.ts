import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listviewimg } from './listviewimg';

describe('Listviewimg', () => {
  let component: Listviewimg;
  let fixture: ComponentFixture<Listviewimg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listviewimg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listviewimg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
