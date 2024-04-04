import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '@spartacus/storefront';
import { NavigationNode } from '@spartacus/storefront';
import { NavigationService } from '@spartacus/storefront';

@Component({
  selector: 'cx-footer-navigation',
  templateUrl: './custom-footer-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./custom-footer-navigation.component.scss'],
})
export class CustomFooterNavigationComponent {
  node$: Observable<NavigationNode> = this.service.getNavigationNode(
    this.componentData.data$
  );

  styleClass$: Observable<string> = this.componentData.data$.pipe(
    map((d) => d?.styleClass || '') 
  );

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {}
}
