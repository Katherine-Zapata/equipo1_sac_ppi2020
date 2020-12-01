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

router.get("/pregunta/:id", (req, res) => {
    connection.query('SELECT * FROM pregunta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/pregunta", (req, res) => {
    connection.query('SELECT * FROM pregunta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/pregunta/:id", (req, res) => {
    connection.query('SELECT * FROM pregunta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/pregunta/:id", (req, res) => {
    connection.query('SELECT * FROM pregunta',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router