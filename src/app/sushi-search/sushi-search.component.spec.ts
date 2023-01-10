import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiSearchComponent } from './sushi-search.component';

describe('SushiSearchComponent', () => {
  let component: SushiSearchComponent;
  let fixture: ComponentFixture<SushiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
