import db from "./conectionConfig.js";


const methodControler={
  
    register: (req,res)=>{

        const email = req.body.emailPost
        const senha = req.body.senhaPost
    
        db.query("INSERT INTO login (email,senha) VALUE(?,?)",[email,senha] ,(err,result)=>{
            if(!err){
                console.log(result)
                console.log("registrado com sucesso")
                res.send(result)
            }
            else{
             console.log(err)
            }
        })
    },

    login:(req,res)=>{

    const email=req.query.emailLogin
    console.log(email)
    

    db.query("SELECT * FROM login WHERE email=?",email,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
        console.log(result)
        }
    })
}

}



export default methodControler;