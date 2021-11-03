// map
// Permite transforar lo que emite el observable

// pluck
// permite trabajar sobre la propiedad de un objeto
// emitido por un observable

// mapTo
// al valor que emite el obserbavle lo podemos transformar

import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// el tipado del map ayuda a evitar problemas en la salida
// range(1,5).pipe(
//     map<number, number>(resp => resp * 10)
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyup$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));



