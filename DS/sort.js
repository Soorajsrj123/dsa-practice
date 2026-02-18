let a=[4,3,4,3,9,6,7,100]
let temp;


for(let i=0;i<a.length;i++){
  for(let j=i+1;j<a.length-1;j++){
      if(a[i]>a[j]){
        temp=a[i]
        a[i]=a[j]
        a[j]=temp
      }
  }
}
console.log(a);