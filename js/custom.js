
(function($,W,D)
{
    var JQUERY4U = {};
    $('#formBoxSuccess').hide();

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#contactForm").validate({
                rules: {
                    fname: "required",
                    lname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true,
                        minlength: 5
                    },
                    message: {
                            required: true,
                            minlength: 10
                    }
                },
                messages: {
                    fname: "Escriba su nombre",
                    lname: "Escriba sus apellidos",
                    phone: {
                        required: "Escriba su contacto telefónico",
                        minlength: "Escriba un número válido"
                    },
                    email: "Escriba un correo válido",
                    message: {
                        required: "Escriba su mensaje",
                        minlength: "Escriba un mensaje válido"
                    } 
                },
                submitHandler: function(form) {
                    var name = $('#fname').val();
                    var surname = $('#lname').val();
                    var phone = $('#phone').val();
                    var email = $('#email').val();
                    var message = $('#message').val();

                    var send_message = "<br/>Nombre: " + name + " " + surname + "<br/>Correo: " + email + "<br/>Teléfono: " + phone + "<br/>Mensaje: " + message + "<br/>";
                    
                     $.ajax({
                                type: "POST",
                                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                                data: {
                                  'key': 'Lht37zPPxFtqKB5CQKTFcg',
                                  'message': {
                                    'from_email': email,
                                    'to': [
                                      {
                                        'email': 'hack4funleon@gmail.com',
                                        'name': "develovers" ,
                                        'type': 'to'
                                      }
                                    ],
                                    'subject': "[develovers.xyz] - Mensaje " + name + " " + surname,
                                    'html': send_message
                                  }
                                }
                              });
                   
                    $('#formBoxSuccess').html("Mensaje enviado. ¡Muchas gracias!").show();

                    $('#contactForm').trigger("reset");
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
    