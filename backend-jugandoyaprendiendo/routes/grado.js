const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/grado", (req, res) => {
    connection.query('SELECT * FROM grado',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/grado/:id", (req, res) => {
    connection.query('SELECT * FROM grado',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/grado", (req, res) => {
    connection.query('SELECT * FROM grado',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/grado/:id", (req, res) => {
    connection.query('SELECT * FROM grado',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/grado/:id", (req, res) => {
    connection.query('SELECT * FROM grado',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router