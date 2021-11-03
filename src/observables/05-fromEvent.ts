import { fromEvent } from 'rxjs';

// Crea un Observable que emite eventos de un tipo especifico
// procedente del evento target

// Eventos del DOM

const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe(event => {
    console.log(event.x)
})
src2$.subscribe(evento => {
    console.log(evento.key)
})