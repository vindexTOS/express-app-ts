import { Request, Response } from 'express';
import Task from "../models/ToDoModel"
 


export const getAllTasks = async (req:Request, res:Response) =>{
     
     try {
          const Tasks = await  Task.find();
          res.json(Tasks);
     } catch (error) {
        res.status(500).json({message:"Error fetching ", error})
     }
}
 

export const createTask = async (req:Request, res:Response)=>{
     
    try {
        const{task,isDone,Date} = req.body
         if(!task || !isDone  ||  !Date){
             res.status(405).json("all the values need to be filled")
         }

         await  Task.create({task,isDone,Date})
         res.status(201).json("New Data Has Been Created");
    } catch (error) {
        res.status(500).json({message:"Creating ", error})

    }
}