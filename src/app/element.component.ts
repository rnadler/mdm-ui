import {Component, Input} from "@angular/core";

@Component({
  selector: 'element',
  template: `    
    <span>This is element {{context?.label}}</span>
 `
})
export class ElementComponent {
  @Input() context: any;
}
