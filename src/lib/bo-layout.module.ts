import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule as CartesianCommonModule} from '@cartesianui/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  // ButtonGroupModule,
  ButtonModule,
  // CardModule,
  DropdownModule,
  FooterModule,
  // FormModule,
  GridModule,
  HeaderModule,
  // ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule as CoreUiAngularSharedModule,
  SidebarModule,
  // TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import {
  DefaultActionsComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultPageTitleComponent
} from './default';

// Import 3rd party components
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const APP_CONTAINERS = [DefaultFooterComponent, DefaultHeaderComponent, DefaultPageTitleComponent, DefaultActionsComponent, DefaultLayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartesianCommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    // ChartsModule,
    IconModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    // IconModule,
    // PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    // FormModule,
    // UtilitiesModule,
    // ButtonGroupModule,
    // ReactiveFormsModule,
    CoreUiAngularSharedModule,
    // TabsModule,
    // ListGroupModule,
    ProgressModule,
    BadgeModule
    // ListGroupModule,
    // CardModule,
  ],
  declarations: [...APP_CONTAINERS],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    IconSetService
  ],
  exports: [
    DefaultPageTitleComponent,
    DefaultActionsComponent
  ]
})
export class BoLayoutModule {
  static forRoot(): ModuleWithProviders<BoLayoutModule> {
    return {
      ngModule: BoLayoutModule,
      providers: []
    };
  }

  static forFeature(): ModuleWithProviders<BoLayoutModule> {
    return {
      ngModule: BoLayoutModule,
      providers: []
    }
  }
}
