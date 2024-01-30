"use server"

import { LoginSchema } from "../schemas"
import * as z from "zod"

export const Register = async (values:z.infer<typeof LoginSchema>)=>{
    const ValidatePath = LoginSchema.safeParse(values)
    if(!ValidatePath){
        return{error:"Invalid Fields "!}
    }
    return {success: "Login Successfully!"}
}