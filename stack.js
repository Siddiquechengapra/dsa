class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack {
constructor(){
    // this.data =[]
    this.top=null
    this.bottom=null
    this.length=null
}
push(value){
    let node =new Node(value)
    // this.data.push(value)
    if(!this.top && !this.bottom){
        this.top = node
        this.bottom= node
        this.length ++
        return this
    }
    if(this.top){
        node.next=this.top
        this.top =node
        this.length ++

    }

}
pop(){
//    delete this.data[this.data.length-1]
this.top=this.top.next
this.length --
}
printStack() {
    let topper = this.top;
    let ar = [];          
    
    while (topper) {       
        ar.push(topper.value); 
        topper = topper.next;  
    }
}

}

let st =new stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
st.push(7)
st.printStack()
st.pop()
st.pop()
st.printStack()


