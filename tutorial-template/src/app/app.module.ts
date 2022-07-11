import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from "ngx-highlightjs";

import { CoreMaterialModule } from './core/core-material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { CoursesComponent } from './main/courses/courses.component';
import { EditorComponent } from './main/editor/editor.component';
import { CssComponent } from './views/css/css.component';
import { HtmlComponent } from './views/html/html.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'css', component: CssComponent},
]

import hljs from 'highlight.js';
document.defaultView['hljs'] = hljs;
import 'highlightjs-line-numbers.js';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent,
    EditorComponent,
    CssComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), CoreMaterialModule,BrowserAnimationsModule,FormsModule,FlexLayoutModule,
    HttpClientModule, HighlightModule
  ],
  providers: [
     {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
