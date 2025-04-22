let precio = 4000;
let cantidad = 0;

let precioSpan = document.querySelector('.precio-inicial');
let cantidadSpan = document.querySelector('.cantidad');
let totalSpan = document.querySelector('.valor-total');

precioSpan.textContent = precio;

document.querySelector('#btn-sumar').onclick = function () {
  cantidad = cantidad + 1;
  cantidadSpan.textContent = cantidad;
  totalSpan.textContent = cantidad * precio;
};

document.querySelector('#btn-restar').onclick = function () {
  cantidad = Math.max(0, cantidad - 1); // evita que baje de 0
  cantidadSpan.textContent = cantidad;
  totalSpan.textContent = cantidad * precio;
};