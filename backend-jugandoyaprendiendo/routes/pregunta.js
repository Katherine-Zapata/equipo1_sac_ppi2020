const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/pregunta", (req, res) => {
    connection.query('SELECT * FROM pregunta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

  
module.exports = router