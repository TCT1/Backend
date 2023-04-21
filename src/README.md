#Proyecto Backend. Entrega actual: Tercera entrega del proyecto final

##Organización:

views.router.js -- Maneja los endpoints del proyecto
sessions.router.js -- Genera las funciones de encriptación y comparación de contraseñas con bcrypt
authenticate.js -- Tiene los métodos que manejan el login y register ocupando las funciones del sessions.router.js
logger.js - maneja el registro de errores y logs

##Rutas:
./ - Ejecución del logger
./register - Presenta el formulario de registro de sesión
./login - Presenta el formulario de inicio de sesión
./products - Muestra la lista de los productos del e-commerce



##Registro de errores:

Se presentó un error el cual hace que el req.body no reciba la información proporcionada por medio del Postman.
El error se genera en la función "registerCtrl" del script authenticate.js, en donde se ejecuta de manera adecuada solamente hasta el try


##Variables de entorno del archivo .env:

MONGO_DB='mongodb+srv://Leonardo:champion08@codercluster.0g0vp2u.mongodb.net/?retryWrites=true&w=majority'


###Nota: Los demás scripts que no son mencionados en el apartado de organización son aquellos que no presentan errores y que no han sido modificados ni requeridos para esta entrega