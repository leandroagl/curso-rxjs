import { Observable, Observer } from "rxjs";

// Declaracion de un observer, se envia como argumento al subscribe
// de esta forma ya se define que es lo que debe recibir del subscribe
// importante siempre tipar
const observer: Observer<any> = {
    next : value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}


// const obs$ = Observable.create();
const obs$ = new Observable( subscriber => {
    subscriber.next('Hola')
    subscriber.next('Mundo')

    //Forzar error
    const a = undefined;
    a.nombre = "Lean";

    subscriber.complete();

    subscriber.next('Algo') // este no se emite
})


obs$.subscribe(observer);

// Esta es una forma de enviar los argumentos al subscribe
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Complete')
// )