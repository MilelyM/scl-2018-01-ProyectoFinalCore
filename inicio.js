firebase.initializeApp({
    apiKey: "AIzaSyBPfDrkFKG7TPV7UE0oaNPwyrK2qPz3728",
    authDomain: "registrovisitantes-356b2.firebaseapp.com",
    projectId: "registrovisitantes-356b2"
  });
  //Inicializa una instancia de Cloud Firestore
  var db = firebase.firestore();

// se crea funcion para guardar los datos
function guardar(){
    const rut = document.getElementById('rut').value;
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const email = document.getElementById('email').value; // buscar funcion y hora
    const departamento = document.getElementById('seleccion').value;// cambiar por una lista de seleccion
    const patente = document.getElementById('patente').value;
    const credencial = document.getElementById('credencial').value;
db.collection("visitantes").add({// agrega un id automatico  a nuestro documento
rut: rut,
nombreCompleto: nombreCompleto,
email:email,
departamento: departamento,
patente: patente,
credencial: credencial

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('rut').value = '';
    document.getElementById('nombreCompleto').value  = '';
    document.getElementById('email').value  = '';
    document.getElementById('seleccion').value  = '';
    document.getElementById('patente').value  = '';
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
        <td>${doc.data().rut}</td>
        <td>${doc.data().nombreCompleto}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().departamento}</td>
        <td>${doc.data().patente}</td>
        <td>${doc.data().credencial}</td>
      </tr>`
    });
});
