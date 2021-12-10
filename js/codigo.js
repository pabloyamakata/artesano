// Menú Hamburguesa 

let btnAbrir = document.getElementById('btn-abrir');
btnAbrir.addEventListener('click', () => {

    let menu = document.getElementById('menu_header'); 
    let btnCerrar = document.getElementById('btn-cerrar'); 

    menu.style.display = 'block';
    btnAbrir.style.display = 'none';
    btnCerrar.style.display = 'block';
    btnCerrar.style.float = 'right';
    btnCerrar.style.marginTop = '15px';
    btnCerrar.style.marginRight = '20px';
    btnCerrar.style.cursor = 'pointer';
    btnCerrar.style.fontSize = '20px';
    btnCerrar.style.color = 'rgb(255,240,219)';
})

let btnCerrar = document.getElementById('btn-cerrar');
btnCerrar.addEventListener('click', () => {

    let menu = document.getElementById('menu_header');
    let btnAbrir = document.getElementById('btn-abrir'); 

    menu.style.display = 'none';
    btnAbrir.style.display = 'block';
    btnCerrar.style.display = 'none';
})





