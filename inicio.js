
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
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const departamento = document.getElementById('departamento').value;
    const patente = document.getElementById('patente').value;
db.collection("visitantes").add({// agrega un id automatico  a nuestro documento
rut: rut,
nombre: nombre,
apellido:apellido,
departamento: departamento,
patente: patente

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('rut').value = '';
    document.getElementById('nombre').value  = '';
    document.getElementById('apellido').value  = '';
    document.getElementById('departamento').value  = '';
    document.getElementById('patente').value  = '';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}