$("#btn0").click(function(){
  alert("Mensaje con Alert");    
});

//ejemplo básico
$("#btn1").click(function(){
Swal.fire({
  title: 'INFORMACION DE PRODUCTO:',
  text: '<sfgaksfsigtsfiasisisifs'
});
});	

$("#btn2").click(function(){
Swal.fire({
  title: 'CARACTERISTICAS:',
  text: '<sfgaksfsigtsfiasisisifs'
});
});	

$("#btn3").click(function(){
Swal.fire({
  title: 'DESCRIPCION:',
  text: '<sfgaksfsigtsfiasisisifs'
});
});	

$("#btn4").click(function(){
Swal.fire({
  title: 'PIEZAS DISPONIBLES:',
  text: '<sfgaksfsigtsfiasisisifs'
});
});

$("#btn5").click(function(){
  Swal.fire({
    title: 'PRECIO:',
    text: '<sfgaksfsigtsfiasisisifs'
  });
  });
//con opción de TYPE  //tipos de popups: error, success, warning, info, question




//Animada tiene que ir en la propiedad popup
// popup: 'animated nombreDelEfecto'

//cambiando el background
$("#btn6").click(function(){
  Swal.fire({
      title: 'Personalizando ancho, padding y background.',
      width: 600,
      padding: '5em',
      background: '#fff url(/img/imagen_600x500.png)', //es el fondo de la caja de dialogo
      backdrop: `
      rgba(5, 5, 25, 0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      center left
      no-repeat
      `
  });
});

//Progresivo
$("#btn7").click(function(){
  Swal.mixin({
    input: 'text', //puede ser text, number, email, password, textarea, select, radio
    confirmButtonText: 'Siguiente &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {
      title: 'Pregunta 1',
      text: '¿Color favorito?'
    },
    {
      title: 'Pregunta 2',
      text: '¿Animal favorito?'
    },
      {
      title: 'Pregunta 3',
      text: '¿País de origen?'
    }      
  ]).then((result) => {
    if (result.value) {
      Swal.fire({
        title: '¡Completado!',
        html:
          'Tus respuestas: <pre><code>' +
            JSON.stringify(result.value) +
          '</code></pre>',
        confirmButtonText: 'Ok'
      })
    }
  });    
});

//con TIMER
let timerInterval
$("#btn8").click(function(){
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <strong></strong> seconds.',
    timer: 2000, //tiempo del timer
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = Swal.getTimerLeft()
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer
    ) {
      console.log('I was closed by the timer')
    }
  });    
});
