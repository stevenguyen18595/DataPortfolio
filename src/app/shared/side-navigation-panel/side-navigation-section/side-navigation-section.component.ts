import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-navigation-section',
  templateUrl: './side-navigation-section.component.html',
  styleUrls: ['./side-navigation-section.component.scss'],
})
export class SideNavigationSectionComponent {
  @Input() matIconName?: string;
  @Input() sectionName?: string;
  @Input() route?: string;
}
