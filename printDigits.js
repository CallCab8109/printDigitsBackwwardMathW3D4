function printDigits (number) {
    var temp=0
    while(number)
    {
        temp *= 10
        temp += number%10
        number = Math.floor(number/10)
    }
    return temp
}

// console.log(printDigits(085200000001))


//solution

// const printDigits1 = num => {
//     while (num) {
//       let digitToPrint = num % 10
//       console.log(digitToPrint)
//       num = (num - digitToPrint) / 10
//     }
//   }

//   printDigits1(2346)


//jareds solution

// const printDigits2 = (num) => {
//     if (num === 0) {
//         console.log(0)
//         return
//     }
//     while (num > 0) {
//         console.log(num % 10)
//         num = Math.floor(num / 10)
//      }
// }

// printDigits(025)
// console.log('---')
// printDigits2(420)
// console.log('---')
// printDigits2(69)