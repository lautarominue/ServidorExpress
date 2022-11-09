const fs = require('fs')
const { json } = require('stream/consumers')


class contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }
    save(articulo) {
        fs.promises.readFile(this.archivo, "utf-8")
            .then(contenido => {
                contenido = JSON.parse(contenido)
                let id = contenido.length + 1
                articulo.id = id
                contenido.push(articulo)
                fs.writeFileSync(this.archivo, JSON.stringify(contenido))
            })
            .catch(error => console.log("error", error))
        }
    getById(id) {
        fs.promises.readFile(this.archivo, "utf-8")
        .then(contenido => {
            contenido = JSON.parse(contenido)
            let objeto = contenido.find((e,i) => e.id == id)
            console.log(objeto)
            return objeto;

        })
        .catch(error => console.log("error", error))
    }
    getAll() {
        fs.promises.readFile(this.archivo, "utf-8")
        .then(contenido => {
            contenido = JSON.parse(contenido)
            console.log(contenido)
        })
        .catch(error => console.log("error", error))
    }
    deleteById(id) {
        fs.promises.readFile(this.archivo, "utf-8")
        .then(contenido => {
            contenido = JSON.parse(contenido)
            contenido = contenido.find((e,i) => e.id != id)
            console.log(contenido)
            contenido.forEach((element,index) => {
                element.id = index + 1
            });
            fs.writeFileSync(this.archivo, JSON.stringify(contenido))
        })
        .catch(error => console.log("error", error))
    }
    deleteAll() {
        // : Void - Eliminia todos lo objetos presentes en el archivo
        fs.writeFileSync(this.archivo,  "")
    }
    

}



let ujsi = new contenedor('./bd.txt')

let articulo = {
    title: "titulo",
    price: 2
}

let jere = ujsi.deleteById(2)
console.log("objeto : ", jere)



