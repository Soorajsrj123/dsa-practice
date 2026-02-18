let a=[33,4,5,6,77,8,88,77]

let elm=77

for(let i=0;i<a.length;i++){
    if(a[i]==elm){
        for(let j=i;j<a.length;j++){
            a[j]=a[j+1];
            break;
        }
    }
}

console.log(a);
