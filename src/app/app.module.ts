import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorChromeModule } from 'ngx-color/chrome'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorChromeModule,
    ShareButtonsModule,
    ShareIconsModule,
    ShareModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
