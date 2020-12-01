const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/evaluacion", (req, res) => {
    connection.query('SELECT * FROM evaluacion',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/evaluacion/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/evaluacion", (req, res) => {
    connection.query('SELECT * FROM evaluacion',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/evaluacion/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/evaluacion/:id", (req, res) => {
    connection.query('SELECT * FROM evaluacion',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router