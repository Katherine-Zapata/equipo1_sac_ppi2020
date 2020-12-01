const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/respuesta", (req, res) => {
    connection.query('SELECT * FROM respuesta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/respuesta/:id", (req, res) => {
    connection.query('SELECT * FROM respuesta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/respuesta", (req, res) => {
    connection.query('SELECT * FROM respuesta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/respuesta/:id", (req, res) => {
    connection.query('SELECT * FROM respuesta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/respuesta/:id", (req, res) => {
    connection.query('SELECT * FROM respuesta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
module.exports = router