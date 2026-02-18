let value=4

function rec(value)
{
    if(value==1)
    {
        return 1
    }
  
   return value*rec(value-1)

}

console.log(rec(value));