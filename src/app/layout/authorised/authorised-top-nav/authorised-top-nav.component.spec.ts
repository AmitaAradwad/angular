import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorisedTopNavComponent } from './authorised-top-nav.component';
import { AuthorisedSideNavTogglerComponent } from '../authorised-side-nav-toggler/authorised-side-nav-toggler.component';

describe('AuthorisedTopNavComponent', () => {
  let component: AuthorisedTopNavComponent;
  let fixture: ComponentFixture<AuthorisedTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedTopNavComponent,AuthorisedSideNavTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
