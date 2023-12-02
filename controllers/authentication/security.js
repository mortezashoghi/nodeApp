
import { pool } from "../db.js";

export class security{
    constructor(email=null){
        this.email=email;
    }

    //checkuser
    async checkuser(){
        const result=await pool.query("SELECT COUNT(*) as count FROM users where email=?",this.email);
       // console.log(JSON.stringify(result[0]));
        return result[0];
    }

    //islogin

    async islogin(req){
        if (typeof req.session.user_id !='undefined') {
           console.log('You are not authorized to view this page');
           return false;
          } else {
           return true;
          }
    }
}