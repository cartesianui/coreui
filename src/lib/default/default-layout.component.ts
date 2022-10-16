import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems: INavData[];

  public perfectScrollbarConfig = {
    suppressScrollX: true
  };

  public constructor(private route: ActivatedRoute) {
    this.navItems = route.snapshot.data['navItems'];
  }
}
