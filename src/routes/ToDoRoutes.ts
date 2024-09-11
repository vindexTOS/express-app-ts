import { Router } from 'express';
import {   getAllTasks , createTask  } from '../controller/ToDoController';


const router = Router()



router.get("/task", getAllTasks)

router.post("/task",  createTask   )



export default router