//import the modal
const Todo = require("../models/todo");

//define route handler
exports.getTodo = async(req,res) =>{

    try{
        //fetch all data from todo database
        const todos =  await Todo.find({});

        //response
        res.status(200)
            .json({
                success:true,
                data:todos,
                message:"entire todo data is fetched",
            })
        

    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server Error',
        })

    }
}

exports.getTodoById = async(req,res) =>{

    try{
        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id});

        //data forgiven id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found with given id",
            })
        }

        //data for given id not found
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`,
        })

    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        }) 
    }
}