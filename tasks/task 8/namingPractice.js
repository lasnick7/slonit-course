// function pp(u) {
//     let x = 0;
//     u.forEach(i => {
//       x += i;
//     });
//     return x;
//  }
  
//  let aa = [10000, 20000, 30000];
//  console.log(pp(aa));

// функция не имеет осмысленного имени, названия переменных не информативны

function getTotalSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
}
  
let mostValuableClientsSpends = [10000, 20000, 30000];
console.log(getTotalSum(mostValuableClientsSpends));