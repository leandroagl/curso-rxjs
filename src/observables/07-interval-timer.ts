import { interval, timer } from 'rxjs';

// interval
// Crea un observable que emite una secuencia 
// de numeros en un intervalo de tiempo especificado

// timer
// Crea un observable que comienza a emitir valores
// despues de una fecha especifica y luego de ese valor
// empieza a emitir los valores siguientes en un
// periodo de tiempo indicado


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 )

const interval$ = interval(1000);
// const timer$    = timer(2000);
// const timer$    = timer(2000, 1000); comienza luego de 2000 y se repite cada 1000
const timer$ = timer(hoyEn5);



// Demostracion asyncrona
console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe(observer)
console.log('Fin');
