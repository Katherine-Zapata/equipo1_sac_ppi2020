const { Router } = require("express")
const router = Router()
const multer = require('multer')
const path = require('path')
const {v4 : uuidv4} = require('uuid')
const {connection} = require('../db/mysql')
    
const cargador = multer({
  storage : multer.diskStorage({
    destination : (req, file, cb) => {
      cb(null, path.join(__dirname,'../public/uploads'))
    },
    filename : (req, file, cb) => {
       cb(null, uuidv4() + path.extname(file.originalname));
    }
  })
})

router.get("/", (req, res) => {
    connection.query('SELECT * FROM docente',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.post('/docente', cargador.single('imagen_perfil'), async(req, res) => {
  try{
    if(req.file){
      const {
        nombre,
        asignatura,
        correo
      } = req.body
      const response = await connection.query(`INSERT INTO docente(nombre,asignatura,correo,imagen_perfil) VALUES(?,?,?,?)`, [nombre, asignatura, correo, JSON.stringify(req.file)])
      res.json({mensaje : "El docente fue almacenado correctamente.", archivo : {ruta :'uploads/' + req.file.filename}})
    }else{
      res.json({mensaje : "El archivo no se cargo"})
    }
  }catch(error){
    res.status(500).json({mensaje : "Error en el servidor."})
  }
})

  
module.exports = router