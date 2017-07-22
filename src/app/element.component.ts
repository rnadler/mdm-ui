
import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'element',
  template: `
    <dynamic-content [type]="type" [context]="context"></dynamic-content>
 `
})
export class ElementComponent implements OnInit {

  @Input() context: any;
  type: string;

  ngOnInit(): void {
    this.type =  this.context.editable != null ? this.context.editable.format : null;
  }
}
