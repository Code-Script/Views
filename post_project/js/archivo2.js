 function readCookie(name) {
   return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;

    }
      Categoria = readCookie('categoria')
      if(Categoria =='Margeting_Digital'){
          document.getElementById("imgcategoria").src = "img/marke.jpg";
      }
      else if(Categoria =='Desarrollo_Web'){
          document.getElementById("imgcategoria").src = "img/prog.jpg";
      }
      else if(Categoria =='Arquitectura'){
          document.getElementById("imgcategoria").src = "img/arqui.jpg";
      }
      else if(Categoria =='Cocina'){
          document.getElementById("imgcategoria").src = "img/food.jpg";
      }
      else if(Categoria =='Fotografia'){
          document.getElementById("imgcategoria").src = "img/fotografia.jpg";
      }
      else if(Categoria =='Otros'){
          document.getElementById("imgcategoria").src = "img/otros.jpg";
      }else{
        alert ('debe elegir una categoria') 
          window.location('index.html')
      }

    var frmnombreproyecto= $('#frmnombreproyecto');
    var frmnombreproyectoValidator = frmnombreproyecto.validate();
    var frmcaracteristicas= $('#frmcaracteristicas');
    var frmcaracteristicasValidator = frmcaracteristicas.validate();

    $('#demo').steps({
      onChange: function (currentIndex, newIndex, stepDirection) {
        console.log('onChange', currentIndex, newIndex, stepDirection);
        // tab1
        if (currentIndex === 0) {
          if (stepDirection === 'forward') {
            var valid = frmnombreproyecto.valid();
            return valid;
          }
          if (stepDirection === 'backward') {
            frmnombreproyectoValidator.resetForm();
          }
        }
           if (currentIndex === 1) {
          if (stepDirection === 'forward') {
            var valid = frmcaracteristicas.valid();
              campo = document.getElementById('defcaracteristicas')
              campo.setAttribute('class','text-success')
            return valid;
          }
          if (stepDirection === 'backward') {
            frmcaracteristicasValidator.resetForm();
          }
        }
        return true;
      },
      onFinish: function () {
          swal({
  title: "Listo!",
  text: "Tu proyecto sera posteado una vez des click en ok!",
  icon: "success",
  buttons: true,
})
.then((willDelete) => {
  if (willDelete) {
    alert('Aqui va la parte del servidor')
  }
});
      }
    });
      function validarNombre(input, input2){
         nombre = document.getElementById(input).value 
          
              if(nombre!=''){
              campo = document.getElementById(input2)
              campo.setAttribute('class','text-success')
          }else{
              campo.setAttribute('class','')
          }
              
          
      }