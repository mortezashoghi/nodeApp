import {callback_api as amq} from 'amqplib';

export class rabbit{
    constructor(){
        this.rabbitPort=process.env.RABBIT_PORT;
    }
    async connect(){
        amq.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
              throw error0;
            }
            connection.createChannel(function(error1, channel) {});
          });
    }


}