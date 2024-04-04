import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CmsPageTitleComponent,
  isNotNullable,
  PageMetaService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData, PageTitleComponent } from '@spartacus/storefront';

@Component({
  selector: 'cx-page-title',
  templateUrl: './custom-page-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageTitleComponent extends PageTitleComponent implements OnInit {
  title$!: Observable<string>; 

  constructor(
    public component: CmsComponentData<CmsPageTitleComponent>,
    protected pageMetaService: PageMetaService
  ) {
    super(component, pageMetaService);
  }

  ngOnInit(): void {
    this.title$ = this.pageMetaService.getMeta().pipe(
      filter(isNotNullable),
      map((meta) => (meta.heading || meta.title) ?? '')
    );
  }
}
