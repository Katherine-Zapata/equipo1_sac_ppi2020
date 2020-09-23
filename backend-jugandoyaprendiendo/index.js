const express = require(`express`)
const app = express()


app.get("/", function (req, res) {
    res.send("Hola, bienvenidos al maravilloso mundo del aprendizaje")
})

app.listen(8030, function () {
    console.log("El servidor esta corriedno en un puerto 8080")
})