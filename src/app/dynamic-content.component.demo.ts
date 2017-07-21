// https://medium.com/@DenysVuika/dynamic-content-in-angular-2-3c85023d9c36  (https://github.com/DenisVuyka/ng2-dynamic-content)


import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-component-demo',
  template: `
        <div>
            <h2>Dynamic content</h2>
            <h3>Context: <input type="text" [(ngModel)]="context.text"></h3>
            <dynamic-content type="sample1" [context]="context"></dynamic-content>
            <dynamic-content type="sample2" [context]="context"></dynamic-content>
            <dynamic-content type="some-other-type" [context]="context"></dynamic-content>
        </div>
    <sections [context]="title"></sections>
    `
})
export class DynamicContentComponentDemo {

  context: any = {
    text: 'test'
  };
  title: string = 'Data Driven Angular 4 Dynamic Content Demo';
}
