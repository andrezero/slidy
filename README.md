# Slidy is a minimal carousel POC

> A simple exercise to help me understand what is the developer experience creating a small JS/CSS library in 2021. tl;dr: it's quite nice.

## WARNING(s)

1. This code is not maintained.
1. This code is not actively maintained.
1. Need an actual carousel? try [Slick](http://kenwheeler.github.io/slick/).
1. This code does not play well with frameworks such as React. Try [React Slick](https://react-slick.neostack.com/) isntead.
1. This code is not maintained.

## How to use

Install via npm.

```
npm install @andrezero/slidy
```

Add some slides inside a container.

```html
<div id="my-slider">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</div>
```

Create an instance

```javascript
import Slidy from '@andrezero/slidy';

const container = document.getElementById('my-slider');
const slidy1 = Slidy.create(container);
```

Restore original DOM and remove event listeners when you are done.

```javascript
slidy1.destroy();
```

You can also dispose of all instances at once.

```javascript
Slidy.destroy();
```

### Via CDN

Alternatively you can load Slidy into a web page directly.

```html
<!-- goes before </head> -->
<link rel="stylesheet" type="text/css" href="//cdn.../slidy.css" />

<!-- goes before </body> -->
<script type="text/javascript" src="https://cdn.../slidy.js"></script>
```

## API

### Slidy.create(container[, options]): Slidy instance

- **container** dom element that contains the slides
- **options** object with configuration options

| option  | type    | default | description                |
| ------- | ------- | ------- | -------------------------- |
| buttons | boolean | true    | show previous/next buttons |
| dots    | boolean | false   | show navigation dots       |

### Slidy.destroy(container[, options]): Slidy instance

## TODO

- API auto()
- API destroy()
- accessibility
- disable buttons at the end of the track
- options: enable swipe
- options: enable dots
- options: disable arraoes
- gaps
- keyboard navigation

## Limitations

The size of the slider is always the container's size (width and height). In other words, you are in total control of the slider's dimensions and it will be as responsive as your container.

On the other hand, changing the content or style of a slide, in ways that affect its width, will cause gaps or overlaps between slides.

As a rule of thumb:

- slides should not have fixed widths
- the heighest slide dictates the height of the slider.

## MIT License

Copyright (c) 2021 andrezero http://andrezero.mit-license.org/2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Developer’s Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or

(b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or

(c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

(d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.
