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
  UtilitiesModule,
  OffcanvasModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import {
  DefaultActionsComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  DefaultPageTitleComponent,
  OffcanvasComponent
} from './default';

// Import 3rd party components
import { NgScrollbarModule } from 'ngx-scrollbar';

const APP_CONTAINERS = [OffcanvasComponent, DefaultFooterComponent, DefaultHeaderComponent, DefaultPageTitleComponent, DefaultActionsComponent, DefaultLayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartesianCommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
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
    BadgeModule,
    // ListGroupModule,
    // CardModule,
    OffcanvasModule
  ],
  declarations: [...APP_CONTAINERS],
  providers: [
    IconSetService
  ],
  exports: [
    DefaultPageTitleComponent,
    DefaultActionsComponent,
    OffcanvasComponent
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
      providers: [],
    }
  }
}
