const mongoose = require('mongoose');

const connectToDatabase = async () => {
    
    try {
        const URL_MONGODB = process.env.URL_MONGODB || 'mongodb://localhost:27017/Usuarios';
        await mongoose.connect(URL_MONGODB);
        console.log("Conexión a la BBDD realizada con éxito");
        
    } catch (error) {
        console.error("Error al conectar a la BBDD:", error);
        
    }

};

module.exports = connectToDatabase;







