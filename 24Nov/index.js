require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectToDatabase = require('./src/db/connectDb');
const userRouter = require('./src/routers/userRouter');
const movieRouter = require('./src/routers/movieRouter');

const PORT = Number(process.env.PORT || 3000);


connectToDatabase();

const server = express();

server.use(express.json());

server.use(
  cors({
    origin: "https://84.25.28.255:5173", // Url o IP permitida
    methods: ["GET", "POST", "PATCH", "OPTIONS"], // Métodos fetch permitidos
    allowedHeaders: ["Content-Type"], // Cabeceras permitidas
  })
);


//Ruta de comprobación básica
server.get("/", (req, res) => {
  res.send("Hola, mundo!");
});




server.get("/users", (req, res) => {
  //Lo que sea
});

server.use("/api/users", userRouter);

//Router para movies

server.get("/movies", movieRouter);


server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


/*

// EJERCICIO:
//   Implementar rutas para User que hagan:
//     - POST /api/users       -> crear nuevo usuario. Si el email ya existe, devolver error 409.
//     - GET /api/users        -> listar todas
//     - GET /api/users/:id    -> obtener por id.  Si no existe, devolver un error 404.
//     - PATCH /api/users/:id  -> modificar únicamente el campo lastName del usuario.
//     - PUT /api/users/:id   -> No se permite modificar el role, rsto si. Si falla la validación, devolver error 400.
//     - DELETE /api/users/:id -> borrar

*/