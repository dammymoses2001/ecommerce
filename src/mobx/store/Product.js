import { observable, action, computed } from "mobx";

export default class Product {
  @observable value;
  @observable done;

  constructor(value) {
    this.id = v4();
    this.value = value;
  }
  @observable homepageText = "Welcome to ";
}
