firebase.initializeApp({
    apiKey: "AIzaSyBPfDrkFKG7TPV7UE0oaNPwyrK2qPz3728",
    authDomain: "registrovisitantes-356b2.firebaseapp.com",
    projectId: "registrovisitantes-356b2"
  });
  //Inicializa una instancia de Cloud Firestore
  var db = firebase.firestore();

// se crea funcion para guardar los datos
function guardar(){
    
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const rut = document.getElementById('rut').value;
    const email = document.getElementById('email').value; // buscar funcion y hora
    const patente = document.getElementById('patente').value;
    const lugar = document.getElementById('seleccion').value;// cambiar por una lista de seleccion
    const credencial = document.getElementById('credencial').value;
    const observaciones = document.getElementById('observaciones').value;
    const tiempo = new Date().toLocaleString()       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
db.collection("visitantes").add({// agrega un id automatico  a nuestro documento
nombreCompleto: nombreCompleto,
rut: rut,
email:email,
patente: patente,
lugar: lugar,
credencial: credencial,
observaciones:observaciones,
tiempo: tiempo

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
   
    document.getElementById('nombreCompleto').value  = '';
    document.getElementById('rut').value = '';
    document.getElementById('email').value  = '';
    document.getElementById('patente').value  = '';
    document.getElementById('seleccion').value  = '';
    document.getElementById('credencial').value  = '';
    document.getElementById('observaciones').value = '';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}
// leer los documentos
var tableAdm = document.getElementById('tableAdm');
// repite por cada documento dentro de visi y va a pintar id
// onSnapshot para escuchar en tiempo real
db.collection("visitantes").onSnapshot((querySnapshot) => {
    // limpiamos la tabla
    tableAdm.innerHTML ='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tableAdm.innerHTML +=` 
        <tr>
        <td>${doc.data().nombreCompleto}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().rut}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().email}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().patente}</td>
        <td>${doc.data().lugar}</td>
        <td>${doc.data().credencial}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().observaciones}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().tiempo}</td>
        <td class = 'hide-on-med-and-down'><button onclick="editar('${doc.id}','${doc.data().rut}','${doc.data().nombreCompleto}','${doc.data().email}','${doc.data().lugar}','${doc.data().patente}','${doc.data().credencial}','${doc.data().observaciones}')">Editar</button></td>
        <td ><button onclick="borrar('${doc.id}')">Borrar</button></td>

        </tr>`
    });
});

function borrar(id){
    db.collection("visitantes").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
//Para editar al visitante ingresado segun id



function editar(id,rut,nombreCompleto,email,lugar,patente,credencial,observaciones){
//con esto le digo que tome el valor que esta en cada variable y la ponga en el elemento con el id seleccionado
   
    document.getElementById('nombreCompleto').value  = nombreCompleto;
    document.getElementById('rut').value = rut;
    document.getElementById('email').value  = email;
    document.getElementById('patente').value  = patente;
    document.getElementById('seleccion').value  = lugar;
    document.getElementById('credencial').value  = credencial;
    document.getElementById('observaciones').value = observaciones;
//aca hago que el boton se modifique al editar. cambia de Guardar a Editar al ejecutarse la fx editar    
    var boton = document.getElementById("guardar");
    boton.innerHTML = 'Guardar tus Cambios';
//con esto le digo que al hacer click, ejecute esta funcion
    boton.onclick = function(){
        var washingtonRef = db.collection("visitantes").doc(id);
       

        var nombreCompleto = document.getElementById('nombreCompleto').value;
        var rut = document.getElementById('rut').value;
        var email = document.getElementById('email').value;
        var patente = document.getElementById('patente').value;
        var lugar = document.getElementById('seleccion').value;
        var credencial = document.getElementById('credencial').value;
        var observaciones = document.getElementById('observaciones').value;

        return washingtonRef.update({
            nombreCompleto: nombreCompleto,
            rut: rut,
            email: email,
            patente: patente,
            lugar: lugar,
            credencial: credencial,
            observaciones:observaciones
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById('nombreCompleto').value  = '';
            document.getElementById('rut').value = '';   
            document.getElementById('email').value  = '';
            document.getElementById('patente').value  = '';
            document.getElementById('seleccion').value  = '';
            document.getElementById('credencial').value  = '';
            document.getElementById('observaciones').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    
    }
    function Redirect() {
        window.location="administ.html";
     }
// para enviar en msj
 /*var myform = $("form#myform");
myform.submit(function(event) {
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "template_CuftT6hX";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
    .then(function() {
      alert("Sent!");
      myform.find("button").text("Send");
    }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    });
  return false;
});*/

