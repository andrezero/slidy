import { getWidth } from './util/dom';

import { READY, ROOT } from './constants';
import {
  appendToTrack,
  applyStyleToFrames,
  applyStyleToTrack,
  createDom,
  makeClass
} from './ui';
import { Controls } from './Controls';

export class Carousel {
  constructor(container, options = {}) {
    this._container = container;
    this._slides = [...container.children];

    const { track, prev, next } = createDom(container);
    this._frames = this._slides.map((slide) => appendToTrack(slide, track));
    this._track = track;
    this._prev = prev;
    this._next = next;

    const width = getWidth(container);
    applyStyleToFrames(this._frames, width);
    applyStyleToTrack(track, this._frames.length, width);
    container.classList.add(makeClass(ROOT), makeClass(READY));

    this._controls = new Controls(container, this._frames, track, prev, next);
  }

  destroy() {
    const nodes = [...this._frames, ...this._container.children];
    nodes.forEach((node) => node.remove());
    this._slides.forEach((slide) => this._container.appendChild(slide));
    this._container.classList.remove(makeClass(ROOT), makeClass(READY));
    this._controls.destroy();
  }
}
