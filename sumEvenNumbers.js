function sumEvenNumbers (stringArray) {
    let sum = 0;
    for (let i = 0; i< stringArray.length ; i++){
        stringArray[i]=Number (stringArray[i]);
    }
    for (let num of stringArray){
        if (num % 2===0){
            sum += num;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10']);