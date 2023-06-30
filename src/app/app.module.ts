import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincessSvgComponent } from './components/princess-svg/princess-svg.component';
import { TitleComponent } from './components/title/title.component';
import { SecretStoryComponent } from './components/secret-story/secret-story.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincessSvgComponent,
    TitleComponent,
    SecretStoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
