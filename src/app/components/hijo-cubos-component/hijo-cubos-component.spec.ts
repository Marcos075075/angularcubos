import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoCubosComponent } from './hijo-cubos-component';

describe('HijoCubosComponent', () => {
  let component: HijoCubosComponent;
  let fixture: ComponentFixture<HijoCubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoCubosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoCubosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
