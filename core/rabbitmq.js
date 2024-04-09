// import {callback_api as amq} from 'amqplib';
import * as amq from 'amqplib'; 
//const {callback_api: amq} = pkg;

export class rabbit{
    constructor(){
        this.rabbitPort=process.env.RABBIT_PORT;
        this.rabbiturl=process.env.AMQP_URL;
        this.conec=this.connect();
    }
    async connect(){
      console.log("connecting....");
       const rbtconnection= await amq.connect(this.rabbiturl, function(err, connection) {
        // if (err) {
        //   console.log("can Not connect...");
        // }
        console.log("SDFKJADLSFJL"+connection);
        //  connection.createChannel(function(error1, channel) {
        //    if (error1) {
        //      throw error1;
        //    }
        //   const queue = 'my-queue';
        //   channel.assertQueue(queue, {
        //   durable: false
        //     });
        //     console.log(`Created a channel and asserted a queue called ${queue}`);

        //  });
      });
      console.log(rbtconnection);
    }


}
