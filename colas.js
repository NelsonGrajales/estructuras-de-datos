class Cola {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val){
        const hijo = new nodo(val)
        this.length++;
        if(this.length === 1) {
            this.first = hijo;
            this.last = hijo;
            return
        }
        this.last.next = hijo;
        this.last = hijo;
    }

    dequeue(){
        if(this.length === 1 ){
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next
        }
        this.length--;
    }

    isEmpty(){
        return this.length === 0 ? true : false;
    }

    top(){
        return this.first.val;
    }

}

class nodo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}