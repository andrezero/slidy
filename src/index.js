import { ROOT } from './constants';
import { makeClass } from './ui';
import { Registry } from './Registry';
import { Carousel } from './Carousel';

import './styles/index.css';

let __registry;

const _registry = function () {
  if (!__registry) {
    __registry = new Registry();
  }
  return __registry;
};

const auto = function () {
  console.log('!');
};

const create = (container, options) => {
  const registry = _registry();

  if (container.classList.contains(makeClass(ROOT))) {
    throw new Error('DOM element is already a Slidy.');
  }

  const slidy = new Carousel(container, options);
  registry.add(slidy);
  slidy.destroy = () => {
    registry.remove(slidy);
    Carousel.prototype.destroy.apply(slidy);
  };
  return slidy;
};

const destroy = () => {};

const Slidy = {
  auto,
  create,
  destroy
};

export default Slidy;
