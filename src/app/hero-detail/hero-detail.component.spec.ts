import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        providers: [{
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ 'id': '10' }) }
          },
        }],
        imports: [HeroDetailComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
