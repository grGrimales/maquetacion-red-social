 //Referencias del html
 const btnAceptar   = document.querySelector('#boton-cerrar');

 btnAceptar.addEventListener('click', () => {
    
    if(confirm("Aceptar"))
	{
	   return true;
    }

    });
