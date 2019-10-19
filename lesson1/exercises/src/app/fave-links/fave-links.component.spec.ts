import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveLinksComponent } from './fave-links.component';

describe('FaveLinksComponent', () => {
  let component: FaveLinksComponent;
  let fixture: ComponentFixture<FaveLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
