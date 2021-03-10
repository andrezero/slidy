import Slidy from '../';

import './style.css';

let slidy1;

document.querySelector('#make-1').addEventListener('click', () => {
  slidy1 = Slidy.create(document.getElementById('demo-1'));
});
document.querySelector('#destroy-1').addEventListener('click', () => {
  slidy1 && slidy1.destroy();
  slidy1 = null;
});
