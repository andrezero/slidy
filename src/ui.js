import { appendNode, createNode } from './util/dom';

import { ANIMATION_SPEED, BUTTON, DIV, NEXT, PREV } from './constants';
import arrow from './svg/arrow.svg';

export const makeClass = (name) => `slidy-${name}`;

const createSvg = () => {
  const frag = createNode(DIV);
  frag.innerHTML = arrow;
  return frag.childNodes[0];
};

const createButton = (name) => {
  const span = createNode('span', null, name);
  const svg = createSvg();
  const button = createNode(BUTTON, makeClass(name), [span, svg]);
  return button;
};

export const createDom = (container) => {
  const track = createNode(DIV, makeClass('track'));
  const viewport = createNode(DIV, makeClass('viewport'), track);
  const prev = createButton(PREV);
  const next = createButton(NEXT);
  appendNode(container, prev);
  appendNode(container, viewport);
  appendNode(container, next);
  return { track, prev, next };
};

export const appendToTrack = (slide, track) => {
  const frame = createNode(DIV, makeClass('frame'));
  appendNode(frame, slide);
  appendNode(track, frame);
  return frame;
};

export const applyStyleToFrames = (frames, width) =>
  frames.forEach((frame) => (frame.style.width = `${width}px`));

export const applyStyleToTrack = (
  track,
  count,
  width,
  index = 0,
  animate = false
) => {
  const style = track.style;
  style.width = `${width * count}px`;
  style.transform = `translate3d(${-index * width}px, 0px, 0px)`;
  style.transition = animate ? `transform ${ANIMATION_SPEED}ms ease` : '';
};
