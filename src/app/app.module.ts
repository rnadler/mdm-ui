import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService} from "./data.service"

import {
  DynamicContentComponent,
  DynamicSample1Component,
  DynamicSample2Component
} from './dynamic-content.component';
import { DynamicContentComponentDemo } from './dynamic-content.component.demo';
import {SectionsComponent} from "./sections.component";
import {SectionComponent} from "./section.component";
import {GroupComponent} from "./group.component";
import {ElementComponent} from "./element.component";
import {ElementService} from "./element.service";
import {TextElementComponent} from "./elements/text.element.component";
import {DefaultElementComponent} from "./elements/default.element.component";

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    DynamicContentComponentDemo,
    SectionsComponent,
    SectionComponent,
    GroupComponent,
    ElementComponent,
    TextElementComponent,
    DefaultElementComponent
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
    SectionsComponent,
    SectionComponent,
    GroupComponent,
    ElementComponent,
    TextElementComponent,
    DefaultElementComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
