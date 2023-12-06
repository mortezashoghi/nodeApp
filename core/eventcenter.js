import EventEmitter from 'events';

export class emmiter extends EventEmitter{

    constructor (){
        super();

        // // use nextTick to emit the event once a handler is assigned
        // process.nextTick(() => {
        //   this.emit('event');
        // });
    }
}