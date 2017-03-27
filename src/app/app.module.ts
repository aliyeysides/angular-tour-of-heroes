import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';

import { AppComponent }  from './app.component';

import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroService } from './hero/hero.service';
import { HeroSearchComponent} from './hero/hero-search.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
    ],
    providers: [
      HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }