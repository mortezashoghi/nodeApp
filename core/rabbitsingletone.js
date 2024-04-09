import { rabbit } from "./rabbitmq.js";

export class rbtsingle{

    constructor(){

    }
    static getInstance() {
        console.log("getinstance out");
        if (!rbtsingle.instance) {
            console.log("getinstance in");
            rbtsingle.instance = new rabbit();
        }
        return rbtsingle.instance;
    }
  

}