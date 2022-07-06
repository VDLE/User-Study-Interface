import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MatMomentDateModule} from "@angular/material-moment-adapter";
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { ExperimentSelectionComponent } from './experiment-selection/experiment-selection.component';
import { ExperimentTestComponent } from './experiment-test/experiment-test.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { LazyLoadImageModule} from 'ng-lazyload-image';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    AppComponent,
    DemographicsComponent,
    SetupPageComponent,
    ExperimentSelectionComponent,
    ExperimentTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule, 
    MatInputModule, 
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RoundProgressModule,
    LazyLoadImageModule,
    NgxSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
