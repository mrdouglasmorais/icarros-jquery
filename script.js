$(document).ready(function(){
  $('button').click(function(){
    // $('#test').hide();

    // ajax api
    // $.ajax({
    //   url: 'https://webhook.site/a1857554-92e4-4317-a949-9712b910ba4b',
    //   type: 'POST',
    //   data: {
    //     name: 'Douglas'
    //   },
    //   contentType: 'application/json',
    //   success: function() {
    //     console.log('Sucesso!')
    //   }
    // })

    // adicionando classe
    // $('p').addClass('red')

    // removendo classe
    $('p').removeClass('red')
  })
  $('#formulario').submit(function(e){
    e.preventDefault();
    let data = {
      name: $('#name').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
    }
    let badyContent = JSON.stringify(data)
    $.ajax({
      url: 'https://webhook.site/a1857554-92e4-4317-a949-9712b910ba4b',
      type: 'POST',
      data: badyContent,
      contentType: 'application/json',
      success: function(){
        alert('Enviado')
      }
    })

  })
})
