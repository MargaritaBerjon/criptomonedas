class Interface {
  showMesage(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    const divMesage = document.querySelector('.js-mensage');
    divMesage.appendChild(div);

    setTimeout(() => {
      document.querySelector('.js-mensage div').remove();
    }, 3000);
  }

}

