"use server"
import { getUserByEmail } from "../src/data/user"
import { signIn } from "../auth"
import { DEFAULT_LOGIN_REDIRECT } from "../route"
import { AuthError } from "next-auth"
import { LoginSchema } from "../schemas"
import * as z from "zod"

export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Invalid Fields "! }
    }
    const { password, email } = validatedFields.data
    // const existingUser = await getUserByEmail(email)
    // if(!existingUser || !existingUser.email || !existingUser.password){
    //     return {error:"Incorrect Email or Password!"}
    // }
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin": return { error: "Invalid Credentials" }
                default: return { error: "SomeThing Went Wrong!" }
            }
        }
        throw error
    }
}