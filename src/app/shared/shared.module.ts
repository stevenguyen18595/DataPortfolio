import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [MatSidenavModule, MatIconModule, MatDividerModule],
  providers: [],
  exports: [MatSidenavModule, MatIconModule, HeaderComponent, AvatarComponent],
})
export class SharedModule {}
