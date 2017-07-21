import {Input, OnInit} from "@angular/core";

export class ContentContainer implements OnInit {
  private elements: any;
  @Input() context: any;

  constructor(private elementName: string) {
  }

  ngOnInit(): void {
    this.elements = [];
    let elements = this.elementName === null ? this.context : this.context[this.elementName];
    for (let el in elements) {
      this.elements.push(elements[el]);
    }
  }
  setContext(data: any) {
    this.context = data;
    this.ngOnInit();
  }
}
