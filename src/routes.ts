import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request , response: Response){
    const user = createUser({
        email:'paulo@teste',
        passowrd:'123',
        techs: ['Python', 'Node']
    })
    return response.json({ message: 'Hello World!!!'})
}