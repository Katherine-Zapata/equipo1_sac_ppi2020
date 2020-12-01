const express = require(`express`)
const morgan = require("morgan")
const app = express()


//Middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'));

//Routes
app.use("/api/", require("./routes/estudiante"))
app.use("/api/", require("./routes/grado"))
app.use("/api/", require("./routes/docente"))
app.use("/api/", require("./routes/evaluacion_valor"))
app.use("/api/", require("./routes/evalucion"))
app.use("/api/", require("./routes/pregunta"))
app.use("/api/", require("./routes/respuesta"))

app.get("/", function (req, res) {
    res.send("Hola, bienvenidos al maravilloso mundo del aprendizaje")
})

app.listen(8030, function () {
    console.log("El servidor esta corriedno en un puerto 8030")
})