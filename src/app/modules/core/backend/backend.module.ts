import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BackendConfig } from './config';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [],
  exports: []
})
export class BackendModule {
  static forRoot(config: BackendConfig): ModuleWithProviders<BackendModule> {
    return {
      ngModule: BackendModule,
      providers: [{ provide: BackendConfig, useValue: config }]
    };
  }
}
