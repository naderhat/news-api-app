import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCotainerComponent } from './sidenav-cotainer.component';

describe('SidenavCotainerComponent', () => {
  let component: SidenavCotainerComponent;
  let fixture: ComponentFixture<SidenavCotainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavCotainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCotainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
