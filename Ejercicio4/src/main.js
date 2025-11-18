import "./style.css"

const http = require("http");

const server = http.createServer((req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
   res.setHeader("Access-Control-Allow-Methods", "GET");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Bienvenido a mi primer servidor");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("cerca de mí: Jose Antonoio");
  } else if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, { "Content-type": "text/plain" });

    const data = {
      curso: "Node.js",
      alumno: "Nombre del alumno",
      año: 2025
    }
    res.end(JSON.stringify);
  } else if (req.method === "GET" && req.url === "/hora") {
    res.writeHead(200, { "Content-type": "text/plain" });

    const ahora = new Date().toISOString()
    res.end(JSON.stringify(ahora));
  }

});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

const app = document.querySelector('#app')


const buttonEx4 = document.createElement('button');
buttonEx4.className = "botonEx4";
app.appendChild(buttonEx4);

// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
//  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");