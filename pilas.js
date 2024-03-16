class Pila {
    constructor(){
        this.nodo = null;
    }

    push(val){
        let nuevoNodo = new nodo(val,this.nodo)
        this.nodo = nuevoNodo;
    }

    pop() {
        let eliminado = this.nodo.val
        this.nodo = this.nodo.punteroAnt;
        return eliminado;
    }

    isEmpty(){
        return this.nodo === null ? true :false;
    }

    top(){
        return this.nodo.val
    }
}

class nodo {
    constructor(val, puntero) {
        this.val = val;
        this.punteroAnt = puntero;
    }
}