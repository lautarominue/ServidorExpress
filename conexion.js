const http = require("http")

const server = http.createServer((peticion,respuesta) => {
    respuesta.end("server prueba")
})

const port = 8400
const conectedServer = server.listen(port,() =>{
    console.log(`servidor hhtp escuchando en el puerto ${conectedServer.address().port}`)
})