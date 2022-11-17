  console.log("--------------------2.Soru--------------------");

  let total1 = 0, total2 = 0

function arkadassayi(num1, num2){
    
    for(i = 1; i < num1; i++){
        if(num1 % i == 0){
           console.log(num1 + "'in çarpanı : " + i);
           total1 = total1 + i;
        }
    }
    console.log("\n");
    for(j = 1; j < num2; j++){
        if(num2 % j == 0){
           console.log(num2 + "'ün çarpanı : " + j);
           total2 = total2 + j;
        }
    }
    console.log("1. sayı ve 2. sayının çarpanlarının toplamı: " + total1 + " ve " + total2 + "\n");

    if(num1 === total2 && num2 === total1){
      console.log(num1 + " ve " + num2 + " arkadaş sayıdır.");
    }else{
        console.log(num1 + " ve " + num2 + " arkadaş sayı değildir.");
    }
} 

arkadassayi(1184 , 1210 );
   console.log("--------------------3.Soru--------------------");

let total = 0;

function mukemmelsayi(num){
    
    for(i = 1; i <= num; i++){
        if(num % i == 0){
           console.log(num + "'in çarpanı : " + i);
           total = total + i;
        }
    }
    console.log("Çarpanlar toplamı : " + total + "\n");
    if(total === num*2){
        console.log(num + " mükemmel sayıdır.");
    }else{
        console.log(num + " mükemmel sayı değildir.");
    }
}
mukemmelsayi(496);
    console.log("--------------------4.Soru--------------------");


function asal(){

    let count = 0;
    for(j = 2; j <= 1000; j++){

        let prime = false;
        for ( i = 2; i < j; i++){
           if (j % i === 0){
                prime = true;
                break;
            } 
        }
        if(prime == false) {
            console.log(j+"\n");
            count++; 
        }
    }
}    
asal();
   console.log("--------------------1.Soru--------------------");

function isPrimeNumber(...numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var y = 2; y < numbers[i]; y++) {
      if (numbers[i] % y == 0) {
        break;
      }
    }
    if (numbers[i] == y) {
      console.log(numbers[i]);

    }
  }
}
isPrimeNumber(8, 725, 473, 1, 5, 6, 51, 31, 43, 955, 93);


