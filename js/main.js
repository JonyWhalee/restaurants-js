(async ()=>{ 
    let {value:localidad} = await swal.fire({
        title:'Bienvenido!',
        text:'Selecciona tu localidad',
        icon:'question',
        color:'white',
        confirmButtonText: 'Seleccionar',
        background: '#242422',
        confirmButtonColor:'#83A8B8',
        padding:'1rem',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        input: 'select',
        inputPlaceholder:'Nombre de tu Localidad',
        inputValue:'',
        inputOptions: {
            Alberdi: 'Alberdi',
            Balcarce: 'Balcarce',
            CiudadDeBuenosAires: 'Cuidad de Buenos Aires',
            Dolores: 'Dolores',
            Ezeiza: 'Ezeiza',
            FlorentinoAmeghino: 'Florentino Ameghino',
            GeneralRodriguez: 'Gueneral Rodriguez',
            Huanguelen: 'Huanguelen',
            Junin: 'JAJAJA sos de Junin',
            LaPlata:'La Plata',
            MardelPlata: 'Mar del Plata',
            Necochea: 'Necochea',
            Olavarria: 'Olavarria',
            Pinamar: 'Pinamar',
            Quilmes: 'Quilmes',
            Rivadavia: 'Rivadavia',
            SanIsidro: 'San Isidro',
            Tandil: 'Tandil',
            Tigre: 'Tigre',
            VillaGesell: 'Villa Gesell',
            Zarate:'Zarate'
        }})
        if(localidad){
            Toastify({
                text:`Has seleccionado ${localidad} 😍`,
                duration: 4000,
            }).showToast();
        }
})()




// init();

// function init()
// {
//     saludar();
//     // mensaje();
//     // botonMenor();
//     // botonMayor();
//     // mostrarPizzas();

// }
// function mostrarInputs()
//     {
//         saludar();
//     }

// function mensaje()
//   {
//     let mensaje = document.createElement("p");
//     mensaje.innerHTML = `Acá tienes todas las opcciones del dia de hoy!`
//     document.body.appendChild(mensaje);
//   }

// function botonMenor()
//   {
//     let btnMenor = document.createElement("button");
//     btnMenor.innerHTML="Menor Precio"
//     btnMenor.addEventListener("click", ()=>
//     {
//       ordenarMenor();
//     });
//     document.body.append(btnMenor);
//   }

// function botonMayor() 
//   {
//     let btnMayor = document.createElement("button");
//     btnMayor.innerHTML="Mayor Precio"
//     btnMayor.addEventListener("click", ()=>
//     {
//       ordenarMayor();
//     });
//     document.body.append(btnMayor);
//   }

// function ordenarMenor()
// {
//   let ordenarMenor = pizzeria.sort((p1, p2) =>
//   {
//     if(p1.precio < p2.precio)
//     {
//       return -1;
//     } 
//     else
//     {
//       return 1;
//     }
//   });
//   mostrarPizzas();
// }

// function ordenarMayor()
// {
//   let ordenarMayor = pizzeria.sort((p1, p2) =>
//   {
//     if(p1.precio > p2.precio)
//     {
//       return -1;
//     } 
//     else 
//     {
//       return 1;
//     }
//   });
//   mostrarPizzas();
// }

// function mostrarPizzas()
//   {
//     let nodoLista = document.getElementById ("listaPizzeria");
//     if(!nodoLista)
//     {
//       nodoLista = document.createElement("ul");
//       nodoLista.setAttribute("id", "listaPizzeria");
//     }
//     nodoLista.innerHTML = ""

//     pizzeria.forEach(element => 
//     {
//       let nodoElemento = document.createElement("li");
//       let nombre = `<h1>${element.nombre}</h1>
//                     <img class="photo" src="${element.img}">
//                     `;
//     nodoElemento.innerHTML = ` ${nombre} <button id="x-${element.id}" onclick='functionX(this);'> Precio </button>`;
//     nodoLista.appendChild(nodoElemento);  
//     });
//     document.body.append(nodoLista);
//   }
// function functionX (element)
//   {
//   let elementId = element.getAttribute('id').match(/\d+/g).join('')
//   let id = Number(elementId)
//   let precio = pizzeria.find(pizza => pizza.id == id).precio
//         element.innerHTML = `Este es el precio : $${precio}`
//   }
