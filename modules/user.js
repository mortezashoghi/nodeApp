
const db=require('./db');
const crypto = require('crypto');

class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.isActive = true;
    }


    fulinfo=()=> { 
         return this.name+"--"+this.age
    }
    tavan=()=> { 

        //return "this.age+this.age";
        return this.isActive;
    }
    iseven=()=>{
        if ((this.age % 2) ==0 ) return true;
        else return true;
    }
    adduser=(tbl,data)=>{
        const dbcon=new db();
        return dbcon.addrecord(tbl,data);
        //console.log("res is "+result);        
        //return JSON.stringify(result);

    }

}

module.exports.user =  user;


// const fulinfo = (name, age)=>{ 
//     return name + "--" + age;

// }

// const tavan = (age) => { 
//     const age2 = [1, 2, 3,age];
//     return age2;
// }

// module.exports = {fulinfo,tavan}