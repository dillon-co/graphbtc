import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardNetworkingComponent } from './dashboardnetworking.component';
import { DashboardNetworkingModule } from './dashboardnetworking.module';

describe('DashboardComponent', () => {
  let component: DashboardNetworkingComponent;
  let fixture: ComponentFixture<DashboardNetworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardNetworkingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
