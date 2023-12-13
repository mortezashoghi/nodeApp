import {callback_api as amq} from 'amqplib';

export class rabbit{
    constructor(){
        this.rabbitPort=process.env.RABBIT_PORT;
        this.rabbiturl=process.env.AMQP_URL;
        this.connect();
    }
    async connect(){
       return await amq.connect(this.rabbiturl, function(err, connection) {
        if (err) {
          throw error0;
        }
        // connection.createChannel(function(error1, channel) {
        //   if (error1) {
        //     throw error1;
        //   }
        // });
      });
    }


}
