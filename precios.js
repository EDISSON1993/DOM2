/*Declaración de variables*/
const form = document.getElementById('agregarForm');
const listaProducto = document.getElementById('listaProductos');
const eliminarCompletadasl = document.getElementById('eliminarCompletadasl');
const listatexto = document.getElementById('advertencia');

/*Función para agregar datos*/
form.addEventListener('submit', function (event){

    event.preventDefault();
    
    /*Declaración de variables para traer el id tarea y mostrarlo en la pantalla*/
    const nuevoProducto = document.getElementById('producto').value;

    const nuevoProductoli = document.createElement('li');
   
    nuevoProductoli.innerHTML = nuevoProducto;

    nuevoProductoli.addEventListener('click', function(){

        
        nuevoProductoli.classList.toggle('completada');


    })

    listaProducto.appendChild(nuevoProductoli);

    document.getElementById('producto').value = ' ';

    /*Función para eliminar las tareas que estaban agregadas */
    eliminarCompletadasl.addEventListener('click', function(){

        const list = document.getElementById('listaProductos');

        const listaagregada = document.querySelector('ul');

        const item = listaagregada.lastElementChild;

        list.removeChild(item);

        document.getElementById('advertencia').innerText='\n\n\n\n\n\n\n\n\n\n\n\n\n\nQuerido usuario eliminó todos los productos de la lista';     
    
    });

    document.getElementById('advertencia').innerText='';

})




