

const express = require('express');
const cors = require("cors");
const app = express();

const {usuarios} = require('./bbddmockeada/dataUsers');

//Middleware para que analice JSON de las solicitudes
app.use(express.json());

//Para manejar solicitudes CORS usamos libreria npm i cors




//RUTAS
//EndPoint Raíz
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

//Ejercicio 1 EndPoint de about
app.get('/about', (req, res) => {
    res.send('Acerca de mi: Nombre del alumno');
}); 

// Puerto a usar en el Server
const PORT = 3000;



//Ejercicio 2 EndPoint de info

app.get('/info', (req, res) => {
    const dataUser = {
        nombre: 'Sergio',
        edad: 44,
        curso: 'NodeJS'
    };
    res.send(JSON.stringify({
        status: 'Success',
        data: dataUser
    }));
});
 
//Ejercicio 3 EndPoint de Contact

app.get('/contact', (req, res) => {
    res.send('Gracias por contactarnos');
}); 

//Ejercicio 4 EndPoint de hora

app.get('/hora', (req, res) => {
    const fecha = new Date().toISOString();
    res.send(`La hora actual es: ${fecha}`);
}); 

//Ejercicio 5 EndPoint de login

app.post('/login', (req, res) => {

    //Obtengo email y pass desde mi Front

    const { email, password } = req.body;

    //Busco dentro de mi array de usuarios si encuentro el que me ha llegado

    const usuario = usuarios.find(
        (u) => u.email === email && u.pass === pass
    );
    //Si no lo encuentro, devuelvo error  

    if (!usuario) {
        return res.statuts(200).json({
            status: 'Failed',
            message: 'Email o contraseña incorrectos'
        });
    }

    //Verificar rol de usuario

    if (usuario.role !== 'admin') {
        return res.status(200).json({
            status: 'Failed',
            message: 'El usuario no tiene privilegios'
        });
    }

    res


});
    
    
    

// Aquí lanzo el Server escuchando en ese puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});