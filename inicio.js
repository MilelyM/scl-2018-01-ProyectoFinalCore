
    fetch('https://api.rutify.cl/rut/253310839')
    .then(function(resp) {
        return resp.json();
        //retorna la data
    })
    .then(function (valores) {
       console.log(valores)

    });