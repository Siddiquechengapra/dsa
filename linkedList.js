class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.length = 0;
        this.head = null
        this.tail = null
    }
    add(value){
        let node=new Node(value)
        if(!this.head && !this.tail){
            this.head=node
            this.tail=node
        }
        if(this.tail){
            this.tail.next=node
            this.tail=node
            this.length++
        }
    }
    traverseToIndex(index){
        let item = this.head
        let counter =0;
        while(counter !== index){
            item=item.next
            counter++
        }
        return item
    }
    remove(index){
        let leader  =this.traverseToIndex(index-1)
        let unwanted = leader.next
        leader.next =unwanted.next
        this.length--
        this.print()

        
    }
    insert(value,index){
        if(index !==0){
        let newnode =new Node(value)
        let leader =this.traverseToIndex(index-1)
        let holder = leader.next
        leader.next =newnode
        newnode.next=holder
        this.length ++
        this.print()
    }else{
        this.add(value)
    }

    }
    print(){
        if(this.head){
            let start=this.head
            let data= []
            while(start){
                data.push(start.value)
                start=start.next
            }
            console.log("ll",data)
        }
    }

}
let ll =new linkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.add(6)
ll.add(7)
ll.add(8)
ll.remove(6)
ll.insert(11,1)