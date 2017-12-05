import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { HistoryComponent } from './components/history/history.component';
import {ResultsService} from "./services/results/results.service";
import {ParticipantsService} from "./services/participants/participants.service";
import { ProfileFormComponent } from './components/profiles/profile-form.component';

const appRoutes: Routes = [
  {
    path: 'info',
    component: GameInfoComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    ProfilesComponent,
    HistoryComponent,
    ProfileFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [ResultsService, ParticipantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
