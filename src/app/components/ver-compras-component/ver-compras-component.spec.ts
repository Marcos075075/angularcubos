import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerComprasComponent } from './ver-compras-component';

describe('VerComprasComponent', () => {
  let component: VerComprasComponent;
  let fixture: ComponentFixture<VerComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerComprasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerComprasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
