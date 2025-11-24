const express = require('express');
const { getAllUsers, insertNewUser, getUserById, deleteUserById, editUserById } = require('../controllers/userController');
const router = express.Router();

//Obtenemnos todas los usuarios
router.get("/", getAllUsers);
//obtengo un usuario por id
router.get("/:userId", getUserById);

router.post("/", insertNewUser);

//Borrar usuario
router.delete("/:userId", deleteUserById);

// Ruta para editar un usuario (PATCH)
router.patch("/:userId", editUserById);
    
    

module.exports = router;