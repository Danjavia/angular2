import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CrmAppComponent } from '../app/crm.component';

beforeEachProviders(() => [CrmAppComponent]);

describe('App: Crm', () => {
  it('should create the app',
      inject([CrmAppComponent], (app: CrmAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'crm works!\'',
      inject([CrmAppComponent], (app: CrmAppComponent) => {
    expect(app.title).toEqual('crm works!');
  }));
});
