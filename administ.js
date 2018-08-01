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
    const tiempo = new Date().toLocaleString()
db.collection("visitantes").add({// agrega un id automatico  a nuestro documento
nombreCompleto: nombreCompleto,
rut: rut,
email:email,
patente: patente,
lugar: lugar,
credencial: credencial,
tiempo : tiempo

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
   
    document.getElementById('nombreCompleto').value  = '';
    document.getElementById('rut').value = '';
    document.getElementById('email').value  = '';
    document.getElementById('patente').value  = '';
    document.getElementById('seleccion').value  = '';
    document.getElementById('credencial').value  = '';
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
        <td>${doc.data().email}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().patente}</td>
        <td>${doc.data().lugar}</td>
        <td class = 'hide-on-med-and-down'>${doc.data().credencial}</td>
        <td>${doc.data().tiempo}</td>
      </tr>`
    });
});
