import { Observable, Observer, subscribeOn } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log('next:', value),
    error: error => console.warn('obs:', error),
    complete: () => console.info('completado')
};

const intervalos$ = new Observable<number>( subscriber => {
    // Crear un contador 1,2,3,4,5,6...
    let count = 0;
    // funcion que no recibe argumento, ejecuta el cuerpo cada segundo
    const interval = setInterval( () => {
       subscriber.next(count++)
       console.log(count) 
    }, 1000);
    
    setTimeout( () => {
        subscriber.complete()
    }, 2500)
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
    
})

const sub1 = intervalos$.subscribe(observer);
const sub2 = intervalos$.subscribe(observer);
const sub3 = intervalos$.subscribe(observer);

sub1.add(sub2)


setTimeout( () => {
    sub1.unsubscribe()
    sub2.unsubscribe()

    console.log('Completado timeout')
}, 6000)
