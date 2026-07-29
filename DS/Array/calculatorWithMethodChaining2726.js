class Calculator{

    constructor(initialValue) {
         this.result=initialValue
    }
    add(value) {
        this.result +=value
        return this
    }
    subtract(value){
        this.result-=value
        return this
    }
    divide(value) {
        if(value===0){
            throw new Error("Division by zero is not allowed")
        }
        this.result/=value
        return this
    }
     power(value) {
        this.result=Math.pow(this.result,value)
        return this
    }

    multiply(value) {
        this.result *=value
        return this
    }
    getResult() {
        return this.result
    }

}

let newCalc = new Calculator(9)

console.log(newCalc.subtract(10).multiply(-2).divide(4).add(-1).getResult())