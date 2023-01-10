import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SushiDetailComponent } from './sushi-detail.component';

describe('SushiDetailComponent', () => {
  let component: SushiDetailComponent;
  let fixture: ComponentFixture<SushiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
