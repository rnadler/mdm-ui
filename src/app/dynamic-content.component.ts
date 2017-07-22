import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import {ElementService} from "./element.service";
import {DynamicComponent} from "./dynamic.component";

@Component({
  selector: 'dynamic-content',
  template: `
        <div>
            <div #container></div>
        </div>
    `
})
export class DynamicContentComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() type: string;
  @Input() context: any;
  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, private elementService: ElementService) {
  }

  ngOnInit() {
    if (this.type) {
      let componentType = this.elementService.getComponent(this.type);

      // note: componentType must be declared within module.entryComponents
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      let instance = <DynamicComponent> this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}

@Component({
  selector: 'dynamic-sample-1',
  template: `<div>Dynamic sample 1 ({{context?.text}})</div>`
})
export class DynamicSample1Component extends DynamicComponent {}
ElementService.addElement('sample1', DynamicSample1Component);

@Component({
  selector: 'dynamic-sample-2',
  template: `<div>Dynamic sample 2 ({{context?.text}})</div>`
})
export class DynamicSample2Component extends DynamicComponent {}
ElementService.addElement('sample2', DynamicSample2Component);
