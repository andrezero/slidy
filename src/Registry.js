export class Registry {
  constructor() {
    this._instances = [];
  }

  add(instance) {
    this._instances.push(instance);
  }

  remove(instance) {
    const index = this._instances.indexOf(instance);
    this._instances.splice(index, 1);
  }
}
