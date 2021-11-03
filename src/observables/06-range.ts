import { asyncScheduler, of, range } from 'rxjs';

// Crea un observable que emite una secuencia
// de numeros en base a un rango, por defectos son 
// sincronos pero a su vez se pueden transformar en 
// asicronos usando un easy scheduler


const src$ = range(1,5, asyncScheduler);


console.log('inicio');
src$.subscribe(res => console.log(res));
console.log('fin');