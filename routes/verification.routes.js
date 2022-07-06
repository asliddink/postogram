import { Router } from "express";
import authentificaton from "../middleware/autentification.js";

const router = Router()

router.get('/verify', authentificaton, async (req,res) => {

    const {username, firstname, lastname,age} = res.locals.user

    res.json({
        message: 'Succsify',
        user:{
            username,
            firstname,
            lastname,
            age
        }
    })

})

export default router