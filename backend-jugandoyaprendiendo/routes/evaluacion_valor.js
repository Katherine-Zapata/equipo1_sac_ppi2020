const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/evaluacion_valor", (req, res) => {
    connection.query('SELECT * FROM evaluacion_valor',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/evaluacion_valor/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion_valor',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/evaluacion_valor", (req, res) => {
    connection.query('SELECT * FROM evaluacion_valor',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/evaluacion_valor/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion_valor',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/evaluacion_valor/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion_valor',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router