const router=require("express").Router();
const User= require("../models/user");

router.post("/reg",async(req,res)=>{
    var {e_id, e_name, e_address, e_designation,e_doj,e_dor} = req.body;
    if(!e_id || !e_name || !e_address || !e_designation  || !e_doj){
        return res.status(422).json({error:"field cant empty"})
    }
    try{
        const newUser= new User({
            //var {e_id, e_name, e_address, e_designation,e_doj,e_dor}=req.body;
            e_id:req.body.e_id,
            e_name:req.body.e_name,
            e_address:req.body.e_address,
            e_designation:req.body.e_designation,
            e_doj:req.body.e_doj,
            e_dor:req.body.e_dor
        })
        const user= await newUser.save();
        res.status(422).json(user);

    }catch (err){
        console.log(err);
    }
})

//show data
router.get('/',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(other);
    }catch(er){
        return res.status(500).json(er);
    }
});

//delete data
router.get("/:id",async(req,res)=>{
    
            try{
                const user = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Account deleted");
            }catch(err){
                return res.status(500).json(err)  
            }
       
  
});

//update
router.post("/:id",async(req,res)=>{
            try{
                const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body});
                res.status(200).json("Account updated");
            }catch(err){
                return res.status(500).json(err)  
            }
       
    });

module.exports = router