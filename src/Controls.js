import { getWidth } from './util/dom';

import { applyStyleToFrames, applyStyleToTrack } from './ui';
import { ANIMATION_SPEED, CLICK } from './constants';

export class Controls {
  constructor(container, frames, track, prev, next) {
    this._index = 0;
    this._container = container;
    this._frames = frames;
    this._track = track;
    this._prev = prev;
    this._next = next;

    prev.addEventListener(CLICK, this._handlePrev);
    next.addEventListener(CLICK, this._handleNext);
    this._resizeObserver = new ResizeObserver(() => this._updateSize());
    this._resizeObserver.observe(this._container);
  }

  destroy() {
    this._resizeObserver.disconnect();
    this._prev.removeEventListener(CLICK, this._handlePrev);
    this._next.removeEventListener(CLICK, this._handleNext);
  }

  _updateSize() {
    this._width = getWidth(this._container);
    applyStyleToFrames(this._frames, this._width);
    this._updateTrack();
  }

  _updateTrack(animate = false) {
    const { _frames, _track, _width, _index } = this;
    const count = _frames.length;
    applyStyleToTrack(_track, count, _width, _index, animate);
    clearTimeout(this._timeout);
    if (animate) {
      // in the future: https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
      this._timeout = setTimeout(() => this._updateTrack(), ANIMATION_SPEED);
    }
  }

  _handlePrev = () => {
    if (!this._index) {
      return;
    }
    this._index--;
    this._updateTrack(true);
  };

  _handleNext = () => {
    if (this._index === this._frames.length - 1) {
      return;
    }
    this._index++;
    this._updateTrack(true);
  };
}
