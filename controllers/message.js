import {rbtsingle} from '../core/rabbitsingletone.js';
const channel=null;
const cntTorabbit=()=>{
    const rabbitCnt=rbtsingle.getInstance();
    //console.log(rabbitCnt);
    return rabbitCnt;

}

export const createchannel=async()=>{
    let cnt=cntTorabbit();
    channel = await cnt.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }
          });
    await channel.assertQueue("general");
    console.log("channel is created");
}
export const sendMsg=async(queueName="general",data)=>{
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    // close the channel and connection
    await channel.close();
}
export const getMsg=async(queueName="general")=>{
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
