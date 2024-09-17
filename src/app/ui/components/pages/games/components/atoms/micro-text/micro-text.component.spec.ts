import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroTextComponent } from './micro-text.component';

describe('MicroTextComponent', () => {
  let component: MicroTextComponent;
  let fixture: ComponentFixture<MicroTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
