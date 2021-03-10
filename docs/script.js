/* global Slidy */

const main = () => {
  Slidy.create(document.getElementById('demo-1'));

  let slidy1;
  document.querySelector('#make-1').addEventListener('click', () => {
    slidy1 = Slidy.create(document.getElementById('usage-1'));
  });
  document.querySelector('#destroy-1').addEventListener('click', () => {
    slidy1 && slidy1.destroy();
    slidy1 = null;
  });
};

window.addEventListener('DOMContentLoaded', main);
