import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [MatSidenavModule, MatIconModule],
  providers: [],
  exports: [MatSidenavModule, MatIconModule, HeaderComponent],
})
export class SharedModule {}
