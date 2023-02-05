import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation-section',
  templateUrl: './side-navigation-section.component.html',
  styleUrls: ['./side-navigation-section.component.scss'],
})
export class SideNavigationSectionComponent {
  @Input() matIconName?: string;
  @Input() sectionName?: string;
  @Input() route!: string;

  constructor(private router: Router) {}

  navigateToPage(route: string) {
    this.router.navigateByUrl(route);
  }

  get isActive() {
    const currentRoute = this.router.url;
    return currentRoute.includes(this.route);
  }
}
