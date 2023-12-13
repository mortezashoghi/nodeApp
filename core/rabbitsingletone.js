import { rabbit } from "./rabbitmq.js";

export class rbtsingle{

    constructor(){

    }
    static getInstance() {
        console.log("getinstance out");
        if (!Singleton.instance) {
            console.log("getinstance in");
            Singleton.instance = new rabbit();
        }
        return Singleton.instance;
    }
  

}