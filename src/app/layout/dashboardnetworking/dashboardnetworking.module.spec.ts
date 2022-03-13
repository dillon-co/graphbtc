import { DashboardNetworkingModule } from './dashboardnetworking.module';

describe('DashboardModule', () => {
  let dashboardModule: DashboardNetworkingModule;

  beforeEach(() => {
    dashboardModule = new DashboardNetworkingModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
