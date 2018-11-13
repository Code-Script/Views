 var elemento,ultimo, idanterior='vacio';
      var condicion =false;
      function seleccionarCategoria(id){
         
          if(idanterior!='vacio'){
              document.getElementById(idanterior).style.boxShadow = 'none'
          }
          if(id==idanterior){
               elemento = document.getElementById(id);
          elemento.style.boxShadow = ''
          idanterior = id;
             condicion = false;
          }else{
               elemento = document.getElementById(id);
          elemento.style.boxShadow = '2px 2px 8px 10px #36aff0'
          idanterior = id;
              condicion = true;
              document.getElementById('snackbartext').innerHTML = 'Categoria: '+ id;
              MostrarAlerta()
          }
         
          
      }
        function validar(){
         if(condicion ==true){
             document.cookie = "categoria="+idanterior;
             window.location = 'indexx.html?'+idanterior;
         }else{
                swal({
  title: "Opcion no valida",
  text: "Debe seleccionar una categoria para ejecutrar esta accion :(",
  icon: "warning",
  dangerMode: true,
})
.then((willDelete) => {
  
});
         }
        }
        function MostrarAlerta() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}