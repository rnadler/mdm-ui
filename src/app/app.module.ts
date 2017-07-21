import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService} from "./data.service"

import {
  DynamicContentComponent,
  DynamicSample1Component,
  DynamicSample2Component,
  UnknownDynamicComponent
} from './dynamic-content.component';
import { DynamicContentComponentDemo } from './dynamic-content.component.demo';
import {SectionsComponent} from "./sections.component";
import {SectionComponent} from "./section.component";
import {GroupComponent} from "./group.component";
import {ElementComponent} from "./element.component";
import {ElementService} from "./element.service";

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent,
    DynamicContentComponentDemo,
    SectionsComponent,
    SectionComponent,
    GroupComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    ElementService
  ],
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent,
    SectionsComponent,
    SectionComponent,
    GroupComponent,
    ElementComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
