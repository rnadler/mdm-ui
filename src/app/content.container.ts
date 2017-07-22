import {Input, OnInit} from "@angular/core";

export class ContentContainer implements OnInit {
  private elements: any;
  @Input() context: any;

  constructor(private elementName: string) {
  }

  ngOnInit(): void {
    if (typeof this.context === 'string' || this.context instanceof String) {
      return;
    }
    this.elements = [];
    let elements = this.elementName === null ? this.context : this.context[this.elementName];
    for (let el in elements) {
      let element = elements[el];
      console.log(this.elementName + ' ' + el + ' ' + element.label);
      this.elements.push(element);
    }
  }
  setContext(data: any) {
    this.context = data;
    this.ngOnInit();
  }
}
