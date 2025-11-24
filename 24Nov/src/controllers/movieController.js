const getAllMovies = (req, res) => {
  // Lógica para obtener todas las películas
    res.status(200).send("Aquí tienes todas las películas");
}

module.exports = {
  getAllMovies
};