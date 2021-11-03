import { of } from 'rxjs';

// Convierte el argumento en una secuencia observable
// Siempre que haya una secuencia de valores hay que tipar el valor


// const obs$ = of(1, 2 ,3 ,4 ,5 ,6);
// const obs$ = of([1, 2 ,3 ,4 ,5 ,6]); aca recibe un argumento
const obs$ = of ([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true))


obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
)