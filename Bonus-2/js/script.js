// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
// i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const wrapper = document.querySelector('#wrapper');
console.log(wrapper)


// Prendere i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // Controllare che i numeri siano multipli sia per 3 che per 5 'FizzBuzz'
    // Controllare che i numeri siano multipli di 3 'Fizz'
    // Controllare che i numeri siano multipli di 5 'Buzz'
    let multipleOfFizzBuzz
    let newBoxClass
    if(i % 3 === 0 && i % 5 === 0){
        multipleOfFizzBuzz = 'FizzBuzz';
        newBoxClass = 'multiple-3-5'

    }else if(i % 3 === 0){
        multipleOfFizzBuzz = 'Fizz';
        newBoxClass = 'multiple-3'

    }else if(i % 5 === 0){
        multipleOfFizzBuzz = 'Buzz';
        newBoxClass = 'multiple-5'

    }else{
        multipleOfFizzBuzz = i;
        newBoxClass = 'only-number'
    }
    console.log(multipleOfFizzBuzz)

    // const newBox = `<div>${multipleOfFizzBuzz}</div>`;
    // wrapper.innerHTML += newBox;


    // BONUS 2:
    // Applica stili differenti agli elementi aggiunti al DOM nel 
    // BONUS 1, a seconda che il valore inserito sia un numero, un fizz, 
    // un buzz o un fizzbuzz.

        // creazione di un div con classi
        // appentere il div all'html
        const newBox = `<div class="${newBoxClass}">${multipleOfFizzBuzz}</div>`;
        wrapper.innerHTML += newBox;

};
    