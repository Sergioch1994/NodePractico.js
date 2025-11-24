const express = require('express');

const cors = require("cors");



const server = express();

server.use(express.json());

server.use(
  cors({
    origin: "https://84.25.28.255:5173", // Url o IP permitida
    methods: ["GET", "POST", "PATCH", "OPTIONS"], // Métodos fetch permitidos
    allowedHeaders: ["Content-Type"], // Cabeceras permitidas
  })
);



server.get("/", (req, res) => {
  res.send("Hola, mundo!");
});









const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
