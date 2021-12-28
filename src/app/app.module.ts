import { SecondTypeComponent } from './second-type/second-type.component';
import { VariantEffects } from './store/effects/variant.effects';
import { appReducers } from './store/reducers/app.reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirstTypeComponent } from './first-type/first-type.component';
import { VariantService } from './common/services/variant.service';
import { CountdownTimerComponent, FormatTimePipe } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTypeComponent,
    SecondTypeComponent,
    CountdownTimerComponent,
    FormatTimePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      VariantEffects,
    ]),
  ],
  providers: [
    VariantService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
