const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/puntaje", (req, res) => {
    connection.query('SELECT * FROM puntaje',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/puntaje/:id", (req, res) => {
    connection.query('SELECT * FROM puntaje',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/puntaje", (req, res) => {
    connection.query('SELECT * FROM puntaje',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/puntaje/:id", (req, res) => {
    connection.query('SELECT * FROM puntaje',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/puntaje/:id", (req, res) => {
    connection.query('SELECT * FROM puntaje',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router