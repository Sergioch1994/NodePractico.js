const http = require("http");

const server = http.createServer((req, res) => {
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

// EJERCICIO 2:
//   Modifica el servidor para que devuelva JSON en la ruta /info:
//
//   - GET /info
//     Respuesta (JSON):
//       {
//         curso: "Node.js",
//         alumno: "Nombre del alumno",
//         año: 2025
//       }

// const ahora = new Date().toISOString();
   

   // res.end(JSON.stringify(ahora));


// EJERCICIO 1:
//   Crea un servidor HTTP que tenga estas rutas:
//
//   - GET /
//     Respuesta: "Bienvenido a mi primer servidor"
//
//   - GET /about
//     Respuesta: "Acerca de mí: (nombre del alumno)"
//
//   - GET /contact
//     Respuesta: "Puedes contactar en: (email ficticio)"

