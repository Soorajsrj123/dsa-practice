

const sameNumber = (array, target) => {
    for (j = array.length -1; j > 0; j--) {
        if(array[j] !== target) {
            for (i = 0; i<j; i++) {
                if (array[i] === target) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}

const array = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
const target = 6;

console.log(sameNumber(array, target));