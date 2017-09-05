$( document ).ready(function() {
$('.validar').submit(function(e) {
e.preventDefault();
}).validate({
debug: false,
rules: {
"name": {
required: true
},
"email": {
required: true,
email: true
},
messages: {
"name": {
required: "Introduce tu nombre."
},
"email": {
required: "Introduce tu correo.",
email: ""
},
});
});