import {Router} from 'express'
import UserController from './src/app/controllers/UserController'; 


const router = Router(); 

router.post('/users', UserController.store); 

export default router;
