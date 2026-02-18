

// class HashTable2{
//     constructor(size=10){
//          this.keyMap=Array(size)
//     }

//     hash(key){
//         let total=0
     
//         for(let i=0;i<key.length;i++){
//             let value=key.charCodeAt(i)
//             total=value% this.keyMap.length
//         }
//         return total
//     }

//     set(key,value){
//         let index=this.hash(key)
//         if(!this.keyMap[index]){
//             this.keyMap[index]=[]// new Node(value)
//         }
//         this.keyMap[index].push([key,value])

//     }

//     get(key){
//         let index=this.hash(key)
//         if(this.keyMap[index]){

//             for(let i=0;i<this.keyMap.length;i++){
//                 if(this.keyMap[index][i][0]==key){
//                     return this.keyMap[index][i][1]
//                 }
//             }
//         }
//         return undefined
//     }
// }

// let H2=new HashTable2()
// H2.set('name','soorua')
// H2.set('age','soorua')
// console.log(H2);







class Hashtable{
    constructor(size=10)
    {
        this.keyMap=new Array(size)
    }

    hash(key)
    {
    
     let hash
     for (let i = 0; i < this.keyMap.length; i++) {
       hash+=key.charCodeAt(i)
     }
     return hash%this.keyMap.length
    }

    set(key,value)
    {
        let index=this.hash(key)
        if(!this.keyMap[index])
        {
            this.keyMap[index]=[]
        }
        this.keyMap[index].push([key,value])
    }

    get(key)
    {
        let index=this.hash(key)

        if(this.keyMap[index])
        {
            for (let i = 0; i < this.keyMap.length; i++) {
             if(this.keyMap[index][i][0]==key)
             {
                return this.keyMap[index][i][1]
             }  
                
            }
        }
        return undefined
    }
}

const hh=new Hashtable()

hh.set("name","sooraj")


console.log(hh.get("name"));
console.log(hh);        
