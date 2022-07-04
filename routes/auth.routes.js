import { Router } from 'express';
import { createUser, findUser } from '../service/user.service.js';
import md5 from 'md5';

const router = Router()

router.post('/register', async (req,res) =>{
    const { username, password, firstName, lastName, age } = req.body

    const existUser = await findUser(username)

    if(existUser){
        res.status(400).json({
            masssage: `User with username ${username} already exist.`
        })
    }
    else{
        const token = md5(username + ':' + password)
        const newUser = await createUser(username, password, firstName, lastName, age,token)

        res.status(201).json({
            masssage: 'User created.',
            user:{
                username,
                token
            }
        })
    }
})

router.post('/login', async (req,res) =>{
    const { username,password } = req.body

    const exist = await findUser(username)
    if (!existUser){
        res.status(400).json({
            masssage: `User with username ${username} not found`
        })
    }
    else if(existUser.password !== password){
    res.status(400).json({
        masssage:'Wrong username or password.'
    })
    else{
        res.status(201).json({
            masssage: 'Succsesful logged id.',
            user: {
                username: existUser.username,
                token: existUser.token
            }
        })
    }
}


})

export default router