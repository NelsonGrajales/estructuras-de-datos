class Pila {
    constructor() {
        this.pila = [];
        this.length = this.pila.length;
        this.cima = this.pila.length - 1;
    }

    push(dato) {
        this.cima++
        this.pila[this.cima] = dato;
        console.log(this.pila)
    }

    pull() {
        this.pila[this.cima] = 0
        console.log(this.pila)
    }
}

let pila = new Pila
pila.push(1)
pila.push(2)
pila.push(22)
pila.push(23)
pila.push(24)
pila.pull()