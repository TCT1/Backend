#Proyecto Backend. Entrega actual: Tercera entrega del proyecto final

Organización:

views.router.js -- Maneja los endpoints del proyecto
sessions.router.js -- Genera las funciones de encriptación y comparación de contraseñas con bcrypt
authenticate.js -- Tiene los métodos que manejan el login y register ocupando las funciones del sessions.router.js


Registro de errores:

Al parecer el script authenticate.js no interpreta las importaciones de los otros scripts tales como userModel y las funciones "encrypt" y "compare" de session.router.js

Como resultado de esto, en la ejecución arroja los siguientes errores:
GET http://localhost:8080/routes/sessions.router.js net::ERR_ABORTED 404 (Not Found)    authenticate.js:1       
GET http://localhost:8080/dao/models/user.model.js net::ERR_ABORTED 404 (Not Found)     authenticate.js:4

Nota: Los demás scripts que no son mencionados en el apartado de organización son aquellos que no presentan errores y que no han sido modificados ni requeridos para esta entrega