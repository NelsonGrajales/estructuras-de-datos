class Cola {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    insertEnd(val){
        const data = new nodo(val)
        this.length++;
        if(this.length === 1) {
            this.first = data;
            this.last = data;
            return
        }
        this.last.next = data;
        this.last = data;
    }

    insertHead(val){
        const data = new nodo(val)
        this.length++;
        if(this.length === 1) {
            this.first = data;
            this.last = data;
            return
        }
        data.next = this.first
        this.first = data;
    }

    deleteHead(){
        if(this.length === 1 ){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next
        }
        this.length--;
    }

    delete(val){
        let posicion = this.first
        let borrador = null;
        for(let i = 0; i < this.length; i++){
            if (posicion.next !== null && typeof posicion.next === 'object') {
                if(val != posicion.val){
                    if(borrador === null){
                        borrador = new nodo(posicion.val)
                        console.log(borrador)
                    }
                    borrador.next = posicion
                }else{
                    posicion = posicion.next
                }
            }
        }
        this.first = borrador
    }

    isEmpty(){
        return this.length === 0 ? true : false;
    }

    search(val){
        let posicion = this.first
        for(let i = 0; i < this.length; i++){
            if (posicion.next !== null && typeof posicion.next === 'object') {
                if(val === posicion.val || val === posicion.next.val){
                    return 'encontrado'
                }else{
                    posicion = posicion.next
                }
            }
        }
        return 'no encontrado'
    }
}

class nodo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const cola = new Cola();


cola.insertEnd(1)
cola.insertEnd(2)
cola.insertEnd(3)
cola.insertHead(5)
cola.insertEnd(9)
cola.deleteHead()
console.log(cola.search(10))
cola.delete(1)
