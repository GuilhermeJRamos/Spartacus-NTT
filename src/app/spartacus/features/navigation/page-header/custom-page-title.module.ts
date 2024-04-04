import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  PageMetaModule,
  provideDefaultConfig,
} from '@spartacus/core';
import { CustomPageTitleComponent } from './custom-page-title.component';

@NgModule({
  imports: [CommonModule, RouterModule, PageMetaModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        PageTitleComponent: {
          component: CustomPageTitleComponent,
        },
      },
    }),
  ],
  declarations: [CustomPageTitleComponent],
  exports: [CustomPageTitleComponent],
  entryComponents: [CustomPageTitleComponent],
})
export class CustomPageTitleModule {}
