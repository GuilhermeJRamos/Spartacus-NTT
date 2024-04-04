import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule } from '@spartacus/storefront';
import { NavigationModule } from '@spartacus/storefront';
import { CustomFooterNavigationComponent } from './custom-footer-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GenericLinkModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        FooterNavigationComponent: {
          component: CustomFooterNavigationComponent,
        },
      },
    }),
  ],
  declarations: [CustomFooterNavigationComponent],
  exports: [CustomFooterNavigationComponent],
})
export class CustomFooterNavigationModule {}
