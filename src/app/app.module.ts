import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import * as Survey from 'survey-angular';
import { SurveyComponent } from './survey/survey.component';

import { SurveyEditorComponent } from './survey-editor/survey-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
