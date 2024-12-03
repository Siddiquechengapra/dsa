class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue(value) {
        let node =new Node(value)

        if (this.length===0) {
           this.first =node
           this.last=node
           this.length ++
        }else{
            this.last.next =node
            this.last= node
            this.length++
        }

    }
    dequeue(){
        if(this.last===this.first){
            return null
        }else{
            this.first=this.first.next
            this.length--
        }
    }
    printQueue(){
        let arr= []
        let top =this.first
        while(top){
           arr.push(top.value)
           top=top.next
        }
        console.log("arr queue",arr.reverse())

    }
    peek(){
        console.log("peeking",this.last.value)
    }
}

let queue =new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.peek()
queue.printQueue()
// console.log(queue)