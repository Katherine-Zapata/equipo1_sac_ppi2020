const { Router } = require("express")
const router = Router()
const {connection} = require('./../db/mysql')
    
router.get("/estudiante", (req, res) => {
    connection.query('SELECT * FROM estudiante',  (error, result, fields) => {
            res.json(result)
    })
})

router.get("/estudiante/:id", (req, res) => {
    connection.query('SELECT * FROM estudiante',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})


router.post("/estudiante", (req, res) => {
    connection.query('SELECT * FROM estudiante',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.put("/estudiante/:id", (req, res) => {
    connection.query('SELECT * FROM estudiante',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.delete("/estudiante/:id", (req, res) => {
    connection.query('SELECT * FROM estudiante',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
  
module.exports = router