import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MatDividerModule } from '@angular/material/divider';
import { SideNavigationPanelComponent } from './side-navigation-panel/side-navigation-panel.component';
import { SideNavigationSectionComponent } from './side-navigation-panel/side-navigation-section/side-navigation-section.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    SideNavigationPanelComponent,
    SideNavigationSectionComponent,
  ],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatDividerModule],
  providers: [],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    HeaderComponent,
    AvatarComponent,
    SideNavigationPanelComponent,
    SideNavigationSectionComponent,
  ],
})
export class SharedModule {}
