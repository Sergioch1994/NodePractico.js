const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0) {
            return res.status(404).send("No se encontraron usuarios");
        res.status(200).send({ status: "success", data: users });//envio los usuarios encontrados
        }
       
    } catch (error) {
        return res.status(500).send("Error del servidor");
        
    }
  res.send("Hola a todos los usuarios");
}

const getUserById = async (req, res) => {
   try {
    const { idUser } = req.params;
    const user = await userModel.findById(idUser);
    if (!user) {
        return res.status(404).send("Usuario no encontrado");
        res.status(200).send( { status: "success", data: user });
    }
    res.status(200).send({ status: "success", data: user });
   } catch (error) {
    return res.status(500).send("Error del servidor");
   }
};

// Lógica para insertar el nuevo usuario en la base de datos

const insertNewUser = async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;

        if (!name || !lastName || !email || !password) {
            return send
                .status(400)
                .send({ status: "error", message: "Faltan datos obligatorios"});
        }   
    } catch (error) {
        return res.status(500).send("Error del servidor");  
    }
    const newUser = req.body;
    
    res.status(201).send(`Nuevo usuario creado: ${JSON.stringify(newUser)}`);
}

const deleteUserById = async (req, res) => {
   
  
    try {
        const { userId } = req.params;
        console.log(userId);
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).send({ status: "success", data: user });
    } catch (error) {
        return res.status(500).send({ status: "error", message: "Error del servidor" });
    }
};

//Editar usuario

const editUserById = async (req, res) => {
    try {
        const { idUser } = req.params;
        const newUser = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(idUser, newUser, {
            new: true,
            runValidators: true,
        })
        if (updatedUser) {
            res.status(200).send({ status: "success", data: updatedUser });
        } else {
            res.status(404).send("Usuario no encontrado");
        }   
    } catch (error) {
        return res.status(500).send({ status: "error", message: "Error del servidor" });
    }
  };

module.exports = {
  getAllUsers,
  getUserById,
  insertNewUser,
  deleteUserById,
  editUserById
};
