import express from 'express'; 
import { loginController, signupController, meController } from '../controller/auth.controller.js';
import { loginSchema } from '../validators/auth.schema.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const app = express();
app.use(express.json())

const router = express.Router();

// for post 

router.post("/signup", signupController)

//
router.post("/login", loginController)
router.get("/me", authMiddleware , meController)

export default router;


