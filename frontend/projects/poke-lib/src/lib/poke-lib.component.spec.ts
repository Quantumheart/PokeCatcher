import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLibComponent } from './poke-lib.component';

describe('PokeLibComponent', () => {
  let component: PokeLibComponent;
  let fixture: ComponentFixture<PokeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
