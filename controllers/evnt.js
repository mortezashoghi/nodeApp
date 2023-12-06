import { emmiter } from '../core/eventcenter.js';
const emt=new emmiter();

export const emmit=(req,res)=>{

    emt.emit('test');

}
