
import {Injectable} from "@angular/core";

@Injectable()
export class ElementService {
  private static elementsMap = {};
  private static DEFAULT: string = 'default';

  static addElement(name: string, component: any) {
    this.elementsMap[name] = component;
  }
  static addDefaultElement(component: any) {
    this.addElement(this.DEFAULT, component);
  }

  getElement(name: string) {
    let type = ElementService.elementsMap[name];
    return type || ElementService.elementsMap[ElementService.DEFAULT];
  }
}
