// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
// i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Prendere i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // Controllare che i numeri siano multipli sia per 3 che per 5 'FizzBuzz'
    // Controllare che i numeri siano multipli di 3 'Fizz'
    // Controllare che i numeri siano multipli di 5 'Buzz'
    let multipleOfFizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
        multipleOfFizzBuzz = 'FizzBuzz';

    }else if(i % 3 === 0){
        multipleOfFizzBuzz = 'Fizz';

    }else if(i % 5 === 0){
        multipleOfFizzBuzz = 'Buzz';

    }else{
        multipleOfFizzBuzz = i;
    }
    console.log(multipleOfFizzBuzz)

};
    

// Stampare in console