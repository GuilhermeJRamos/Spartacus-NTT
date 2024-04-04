import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule } from '@spartacus/storefront';
import { MediaModule } from '@spartacus/storefront';
import { CustomBannerComponent } from './custom-banner.component';

@NgModule({
  imports: [CommonModule, RouterModule, GenericLinkModule, MediaModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
        BannerComponent: {
          component: CustomBannerComponent,
        },
        SimpleBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    }),
  ],
  declarations: [CustomBannerComponent],
  exports: [CustomBannerComponent],
})
export class CustomBannerModule {}
