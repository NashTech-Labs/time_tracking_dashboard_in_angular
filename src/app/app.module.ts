import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityCardComponent } from './shared/activity-card/activity-card.component';
import { AvatarCardComponent } from './shared/avatar-card/avatar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityCardComponent,
    AvatarCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
