import {rbtsingle} from '../core/rabbitsingletone.js';

const connection=rbtsingle.getInstance();
const channel=null;

export const createchannel=async()=>{
    channel = await connection.createChannel();
    await channel.assertQueue("mors");
}
export const sendMsg=async(queueName="mors",data)=>{
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    // close the channel and connection
    await channel.close();
}
export const getMsg=async(queueName="mors")=>{
    if(channel==null){
        channel= await connection.createChannel();
    }    
    await channel.assertQueue(queueName);    
    channel.consume(queueName, data => {
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);
    });

}
export const flushqueue=async(queueName)=>{

}
