import { Observable, Observer, Subject, subscribeOn } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log('next:', value),
    error: error => console.warn('obs:', error),
    complete: () => console.info('completado')
};

const intervalos$ = new Observable<number>( subs => {

    const intervalID = setInterval( () => 
        subs.next( Math.random() ), 1000
    );

    return () => {
        clearInterval( intervalID );
        console.log(intervalID)
    };
})

// De esta forma se ejecutan valores diferentes en diferentes suscripciones
// const subs1 = intervalos$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = intervalos$.subscribe(rnd => console.log('subs2', rnd))

/* Caracteristicas del Subject
1 - Casteo multiple, distribuir la misma info a todos los suscriptos
2 - Tambien es un observer
3 - Tambien se puede manejar el next, error y complete
*/

// Aca el observable emite el mismo valor para ambas suscripciones
const subject$ = new Subject() 
const subscription = intervalos$.subscribe(subject$);

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout( () => {

    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();

}, 3500)